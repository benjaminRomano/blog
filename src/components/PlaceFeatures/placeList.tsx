import React from "react";
import styles from "./placeList.module.css";
import classNames from "classnames";
import FlagSvg from "../../../static/img/flag.svg";
import HeartSvg from "../../../static/img/heart.svg";
import PizzaSvg from "../../../static/img/pizza.svg";
import { favoritesColor, pizzaColor, favoritesList, pizzaTag, wantToGoColor, wantToGoList } from "./constants";

export interface Place {
  tags: string[];
  lat: number;
  lng: number;
  place_id: string;
  url: string;
  address: string;
  list: string;
  photo_uri: string;
  name: string;
  icon_background_color: string;
  icon: string;
  icon_mask_base_uri: string;
}

export interface Props {
  places: Place[];
  searchFilter: string;
  setSearchFilter: (value: string) => any;
  setListFilter: (value: string | null) => any;
  listFilter: string | null;
  onPlaceClick: (place: Place) => any;
}

export default function PlaceList({
  places,
  onPlaceClick,
  searchFilter,
  setSearchFilter,
  setListFilter,
  listFilter,
}: Props) {
  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.searchBar}>
          <input
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className={styles.searchInput}
            placeholder="Filter Places"
          ></input>
        </div>
        <button
          onClick={() => setListFilter(listFilter === favoritesList ? null : favoritesList)}
          className={classNames(styles.filterButton, styles.favorites, {
            [styles.favoritesSelected]: listFilter === favoritesList,
          })}
        >
          Favorites
        </button>
        <button
          onClick={() => setListFilter(listFilter === wantToGoList ? null : wantToGoList)}
          className={classNames(styles.filterButton, styles.wantToGo, {
            [styles.wantToGoSelected]: listFilter === wantToGoList,
          })}
        >
          Want To Go
        </button>
        <button
          onClick={() => setListFilter(listFilter === pizzaTag ? null : pizzaTag)}
          className={classNames(styles.filterButton, styles.pizza, {
            [styles.pizzaSelected]: listFilter === pizzaTag,
          })}
        >
          Pizza
        </button>
      </div>
      <p className={styles.counter}>
        {places.length ? `${places.length} ${places.length == 1 ? "place" : "places"} found` : "No Places Found"}
      </p>
      <ul className={styles.list}>
        {places.map((place) => (
          <li style={{ cursor: "pointer" }} onClick={() => onPlaceClick(place)} key={place.place_id}>
            <PlaceCard place={place} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PlaceCard({ place }: { place: Place }) {
  return (
    <div className={styles.place}>
      <img className={styles.placeImage} width={90} height={90} src={place.photo_uri} alt={place.name} />
      <div className={styles.details}>
        <div className={styles.title}>
          <a href={place.url} target="_blank" className={styles.titleText}>
            {place.name}
          </a>
          {place.tags.includes(pizzaTag) && <PizzaSvg style={{ marginRight: "4px" }} fill={pizzaColor} />}
          {place.list === wantToGoList && <FlagSvg fill={wantToGoColor} />}
          {place.list === favoritesList && <HeartSvg fill={favoritesColor} />}
        </div>
        <p className={styles.location}> {place.address}</p>
        <div className={styles.tags}>
          {place.tags.map((tag, index) => (
            <span className={styles.tag} key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
