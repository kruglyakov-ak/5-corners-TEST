import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, MapConsumer } from "react-leaflet";
import 'leaflet-geosearch/dist/geosearch.css';
import { TileLayerOptions } from '../../../../../../const';

const Map = ({ position, address }) => {
    const markerRef = useRef(null);

    const icon = (new Icon({
        iconUrl: 'img/pin.svg',
        iconSize: [27, 39],
        iconAnchor: [13.5, 39],
    }));

    return (
        <MapContainer className="map" center={position} zoom={13}>
            <TileLayer
                attribution={TileLayerOptions.Attribution}
                url={TileLayerOptions.Url}
                id={TileLayerOptions.Id}
                accessToken={TileLayerOptions.AccessToken}
            />
            <MapConsumer>
                {(map) => {
                    map.setView(position);
                    return null;
                }}
            </MapConsumer>
            {(address !== '') && <Marker
                ref={markerRef}
                position={position}
                icon={icon}
            />}
        </MapContainer>
    )
};

export default Map;
