import * as fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { parse as parseCsv } from "csv-parse/sync";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../keys.json")).toString())[
  "internal_ip_api_key"
];

function isLocationInBoundingBox(latitude, longitude, southwest, northeast) {
  return (
    latitude >= southwest.lat && latitude <= northeast.lat && longitude >= southwest.lng && longitude <= northeast.lng
  );
}

// Order is intentional When we de-dupe, we want to preserve the list with the highest importance
const places = ["favorites", "want_to_go", "places_in_la"]
  .map((file) => path.resolve(__dirname, "lists", file))
  .filter((filePath) => fs.statSync(filePath).isFile())
  .flatMap((filePath) => {
    return parseCsv(fs.readFileSync(filePath), { skip_empty_lines: true, columns: true }).map((x) => ({
      ...x,
      list: path.basename(filePath),
      cid: BigInt(x.URL.split(":").slice(-1)[0]).toString(),
    }));
  });

let results = await Promise.all(
  places.map(async (place) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?cid=${place.cid}&key=${apiKey}&fields=name,geometry,address_components,formatted_address,business_status,rating,place_id,photos,url,types,icon,icon_background_color,icon_mask_base_uri`
    );

    if (!response.ok) {
      console.warn(`Failed to resolve place: ${place.Title}`);
      return null;
    }

    const json = await response.json();

    if (json.error_message) {
      console.log(`Failed to resolve place: ${place.Title}, with error message: ${json.error_message}`);
      return null;
    }

    const payload = json.result;

    // Take the first photo only
    if (payload.photos?.length) {
      payload.photo_reference = payload.photos[0].photo_reference;
    }
    delete payload.photos;

    return {
      ...payload,
      list: place.list,
    };
  })
);

results = results
  .filter((x) => !!x)
  .filter((x) => {
    // http://bboxfinder.com/#33.358848,-118.833888,34.321533,-117.023891
    return isLocationInBoundingBox(
      x.geometry.location.lat,
      x.geometry.location.lng,
      {
        lat: 33.358848,
        lng: -118.833888,
      },
      {
        lat: 34.321533,
        lng: -117.023891,
      }
    );
  });

fs.writeFileSync(path.resolve(__dirname, "resolved_places.json"), JSON.stringify(results));
