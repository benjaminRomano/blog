import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  Marker,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useFetch } from "../components/useFetch";
import PlaceList, { Place, PlaceCard } from "../components/PlaceFeatures/placeList";
import _ from "lodash";
import {
  favoritesColor,
  favoritesList,
  pizzaTag,
  wantToGoColor,
  wantToGoList,
} from "../components/PlaceFeatures/constants";
import styles from "../components/PlaceFeatures/placeList.module.css";
import FlagSvg from "../../static/img/flag.svg";
import HeartSvg from "../../static/img/heart.svg";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Page() {
  const { data: places, error } = useFetch<Place[]>("assets/places.json");
  const [searchFilter, setSearchFilter] = useState("");
  const [listFilter, setListFilter] = useState<string | null>(null);
  const [markerPlaceId, setMarkerPlaceId] = useState<string | null>(null);
  const { siteConfig } = useDocusaurusContext();
  const apiKey = siteConfig.customFields.GOOGLE_MAPS_API_KEY as string;
  // Filter by either words within tags or place name
  const filteredPlaces = useMemo(() => {
    return _.sortBy(places || [], (p) => p.name)
      .filter(
        (p) =>
          p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
          p.tags.flatMap((t) => t.toLowerCase().split(" ")).includes(searchFilter.toLowerCase())
      )
      .filter((p) => listFilter === null || p.list === listFilter || p.tags.includes(listFilter));
  }, [searchFilter, places, listFilter]);

  if (error) {
    return <Layout title="Places in LA">Failed to load places...</Layout>;
  } else if (!places) {
    return <Layout title="Places In LA"></Layout>;
  }

  return (
    <Layout noFooter title="Places in LA">
      <div className="container">
        <div className="row">
          <div className="col col--4" style={{ paddingRight: "0px" }}>
            <PlaceList
              onPlaceClick={(p) => setMarkerPlaceId(p.place_id)}
              places={filteredPlaces}
              searchFilter={searchFilter}
              setSearchFilter={setSearchFilter}
              listFilter={listFilter}
              setListFilter={setListFilter}
            />
          </div>
          <div className="col col--8" style={{ paddingRight: "0px" }}>
            {/* Please don't abuse my poor API Key */}
            <APIProvider apiKey={apiKey}>
              <Map
                mapId="a4a5ec674643d4f0"
                clickableIcons={false}
                onClick={() => setMarkerPlaceId(null)}
                initialBounds={{
                  south: 33.925665920450015,
                  west: -118.63052524497982,
                  north: 34.20665809502612,
                  east: -117.94937290122982,
                }}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
              >
                {filteredPlaces.map((p) => {
                  return (
                    <PlaceMarker
                      isOpen={p.place_id == markerPlaceId}
                      setMarkerPlaceId={setMarkerPlaceId}
                      key={p.place_id}
                      place={p}
                    />
                  );
                })}
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const PlaceMarker = ({
  place,
  isOpen,
  setMarkerPlaceId,
}: {
  place: Place;
  isOpen: boolean;
  setMarkerPlaceId: (place_id: string) => any;
}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  let pin: React.JSX.Element;
  if (place.list == "favorites") {
    pin = <FavoritePin />;
  } else if (place.list == "want_to_go") {
    pin = <WantToGoPin />;
  } else if (place.tags.includes(pizzaTag)) {
    pin = <PizzaPin />;
  } else {
    pin = <PlacePin place={place} />;
  }

  return (
    <AdvancedMarker
      ref={markerRef}
      onClick={() => setMarkerPlaceId(isOpen ? null : place.place_id)}
      position={{ lat: place.lat, lng: place.lng }}
    >
      {pin}
      {isOpen && (
        <InfoWindow anchor={marker} maxWidth={500} onCloseClick={() => setMarkerPlaceId(null)}>
          <PlaceCard place={place} />
        </InfoWindow>
      )}
    </AdvancedMarker>
  );
};

const PlacePin = ({ place }: { place: Place }) => {
  return (
    <Pin
      scale={0.8}
      glyph={new URL(String(place.icon))}
      background={place.icon_background_color}
      borderColor="transparent"
    />
  );
};

const PizzaPin = () => {
  return (
    <BrowserOnly>
      {() => (
        <Pin
          scale={0.8}
          glyph={new URL(`${window.location.origin}/img/pizza.svg`)}
          glyphColor="#FF8300"
          background="#FFD514"
          borderColor="#FF8300"
        ></Pin>
      )}
    </BrowserOnly>
  );
};

const WantToGoPin = () => {
  return (
    <BrowserOnly>
      {() => (
        <Pin
          scale={0.8}
          glyph={new URL(`${window.location.origin}/img/flag.svg`)}
          glyphColor="white"
          background={wantToGoColor}
          borderColor="white"
        ></Pin>
      )}
    </BrowserOnly>
  );
};

const FavoritePin = () => {
  return (
    <BrowserOnly>
      {() => (
        <Pin
          scale={0.8}
          glyph={new URL(`${window.location.origin}/img/heart.svg`)}
          glyphColor="white"
          background={favoritesColor}
          borderColor="#white"
        ></Pin>
      )}
    </BrowserOnly>
  );
};
