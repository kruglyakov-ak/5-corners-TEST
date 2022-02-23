import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, MapConsumer } from "react-leaflet";
import { TileLayerOptions } from '../../../../../../const';

const Map = ({ position, setPosition }) => {
    const markerRef = useRef(null);

    const icon = new Icon({
        iconUrl: 'img/pin.svg',
        iconSize: [27, 39],
        iconAnchor: [13.5, 39],
    });

    return (
        <MapContainer className="map" center={position} zoom={13}>
            <TileLayer
                attribution={TileLayerOptions.Attribution}
                url={TileLayerOptions.Url}
                accessToken={TileLayerOptions.AccessToken}
                id={TileLayerOptions.Id}
            />
            <MapConsumer>
                {(map) => {
                    console.log('map center:', map.getCenter())
                    return (<Marker
                        ref={markerRef}
                        position={position}
                        icon={icon}
                        eventHandlers={{
                            dragend: () => {
                                const marker = markerRef.current;

                                if (marker != null) {
                                    const { lat, lng } = marker.getLatLng();
                                    setPosition([lat, lng]);
                                    map.setView([lat, lng]);
                                    console.log(position);
                                }
                            },
                        }}
                        draggable
                    />)
                }}
            </MapConsumer>
        </MapContainer>
    )
};

export default Map;
