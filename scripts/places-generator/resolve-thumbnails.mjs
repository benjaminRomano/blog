import * as fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { Readable } from "stream";
import { finished } from "stream/promises";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../keys.json")).toString())[
  "internal_ip_api_key"
];

const placesInLA = JSON.parse(fs.readFileSync(path.resolve(__dirname, "resolved_places.json")));

await Promise.all(
  placesInLA.map(async (x) => {
    const photoPath = path.resolve(__dirname, `../../static/img/places/${x.place_id}.webp`);
    if (fs.existsSync(photoPath) && fs.statSync(photoPath).size != 0) {
      return;
    }
    console.log(`Resolving place: ${x.name}`);

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${x.photo_reference}&key=${apiKey}`
    );

    if (!response.ok) {
      console.log(`Could not resolve photo_reference, ${x.photo_reference}, for place, ${x.name}`);
      return;
    }
    await finished(
      Readable.fromWeb(response.body)
        .pipe(
          sharp().resize({ width: 200, height: 200, fit: sharp.fit.cover, position: sharp.strategy.entropy }).webp()
        )
        .pipe(fs.createWriteStream(photoPath))
    );
  })
);
