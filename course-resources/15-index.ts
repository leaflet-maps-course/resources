import { Map, marker } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayers } from "../../../config/tile-layers/data";
import { tileLayerSelect } from "../../../config/tile-layers/functions";

startMapTemplate(document, "Sección 2 - 15 - Trabajando con Div Icon");

const mymap = new Map("map").setView([0, 0], 12);

tileLayerSelect(tileLayers.baseLayers.stadia.map.Outdoors, {
  attribution: tileLayers.baseLayers.stadia.atribution,
}).addTo(mymap);

// 3.- Iconos de capa (DivIcon)

// Nuevo estadio nacional de Tokio
const nationalStadiumTokioMarker = marker([35.6778, 139.7145])
  .addTo(mymap)
  .bindPopup(
    `
  <h5>Nuevo Estadio Nacional Tokio</h5>
  <a href="https://es.wikipedia.org/wiki/Estadio_Ol%C3%ADmpico_de_Tokio_(2019)" target="_blank">
  Wikipedia
  </a>
  `
  );
// https://es.wikipedia.org/wiki/Museo_Nacional_de_Tokio
const nationalMuseumTokioMarker = marker([35.718774, 139.776446])
  .addTo(mymap)
  .bindPopup(
    `
  <h5>Museo Nacional Tokio</h5>
  <a href="https://es.wikipedia.org/wiki/Museo_Nacional_de_Tokio" target="_blank">
  Wikipedia
  </a>
  `
  );

mymap.fitBounds([
  [
    nationalMuseumTokioMarker.getLatLng().lat,
    nationalMuseumTokioMarker.getLatLng().lng,
  ],
  [
    nationalStadiumTokioMarker.getLatLng().lat,
    nationalStadiumTokioMarker.getLatLng().lng,
  ],
]);