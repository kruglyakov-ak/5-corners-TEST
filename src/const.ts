import { LatLngTuple } from "leaflet"

export const TileLayerOptions = {
  Attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  Url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  Id: 'mapbox/streets-v11',
  AccessToken: 'pk.eyJ1IjoiYWxla3NhbmRyLWthIiwiYSI6ImNrenp1ZDUxeDAwdGEzcG1zYmUwbmQ0eGgifQ.v5BxlNdNcGdmEbsehj41vQ'
}

export const POSITION: LatLngTuple = [59.939099, 30.315877]
