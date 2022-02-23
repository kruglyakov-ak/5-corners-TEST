import { useEffect, useState } from 'react';
import { MapBoxProvider } from 'leaflet-geosearch';
import { POSITION, TileLayerOptions } from '../../../../../../const';
import MapComponent from '../map/map';

const AddressInput = () => {
    const [position, setPosition] = useState(POSITION);
    const [addressInputValue, setAddressInputValue] = useState('');
    const [address, setAddress] = useState('');


    useEffect(() => {
        const provider = new MapBoxProvider({
            params: {
                access_token: TileLayerOptions.AccessToken,
            },
        });

        provider.search({ query: address }).then(function (result) {
            const { x: lng, y: lat } = result[0];
            setPosition([lat, lng]);
        }).catch(() => {
            return;
        });
    }, [address]);

    const handleAddressInputChange = ({ target }) => {
        setAddressInputValue(target.value);
    };

    const handleAddressInputBlur = ({ target }) => {
        setAddress(target.value);
    };

    return (
        <div className="order-form__map-wrap">
            <div className='address-lable__wrap'>
                <label className='address-lable' htmlFor="address">Адрес</label>
                <input
                    type="text"
                    className="input address-input"
                    id='address'
                    name='address'
                    placeholder='Ваш Адрес'
                    onChange={handleAddressInputChange}
                    onBlur={handleAddressInputBlur}
                    value={addressInputValue}
                    required
                />
            </div>

            <MapComponent position={position} address={address} />

            <div className="total-price">
                <span>Итог:</span><span>3790 руб.</span>
            </div>
        </div>
    )
};

export default AddressInput;
