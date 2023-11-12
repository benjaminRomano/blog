import * as fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import _ from "lodash";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pizzaPlaces = new Set([
  "Gjelina Take Away",
  "Little Dynamite",
  "Pizzeria Sei",
  "Vito's Pizza",
  "Emmy Squared Pizza",
  "Pizzarito NY Pizza By The Slice",
  "Joe's Pizza",
  "Antico Nuovo",
  "Abbot's Pizza Company",
  "Rock N Pies",
  "Lamonica's NY Pizza",
  "Pizzana Brentwood",
  "Ghisallo",
  "Blackbird Pizza Shop",
  "Milo SRO Pizza",
  "L’Antica Pizzeria da Michele",
  "Apollonia's Pizzeria",
]);

/**
 * Manually computing the list of Pizza Places
 */
function isPizza(name) {
  return name.toLowerCase().includes("pizza") || name.toLowerCase().includes("pizzeria") || pizzaPlaces.has(name);
}

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

function transformTags(name, types) {
  const tags = types
    .filter((tag) => {
      return ![
        "point_of_interest",
        "establishment",
        "food",
        "store",
        "meal_takeaway, home_goods_store",
        "meal_takeaway",
      ].includes(tag);
    })
    .map((tag) => {
      if (tag == "cafe") {
        return "Coffee Shop";
      } else {
        return capitalize(tag.replaceAll("_", " "));
      }
    });

  if (isPizza(name)) {
    return ["Pizza"].concat(tags);
  } else {
    return tags;
  }
}

const placesInLA = JSON.parse(fs.readFileSync(path.resolve(__dirname, "resolved_places.json")));
const entries = placesInLA.map((entry) => {
  return {
    name: entry.name,
    lat: entry.geometry.location.lat,
    lng: entry.geometry.location.lng,
    tags: transformTags(entry.name, entry.types),
    place_id: entry.place_id,
    url: entry.url,
    // TODO: Use address components to more effectively format addresses
    address: entry.formatted_address.split(", CA ")[0],
    list: entry.list.split(".csv")[0],
    photo_uri: `/img/places/${entry.place_id}.webp`,
    icon: entry.icon,
    icon_mask_base_uri: entry.icon_mask_base_uri,
    icon_background_color: entry.icon_background_color,
  };
});

fs.writeFileSync(
  path.resolve(__dirname, "../../static/assets/places.json"),
  JSON.stringify(_.uniqBy(entries, (e) => e.place_id))
);
