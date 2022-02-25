import { useEffect, useState } from 'react';
import { MapBoxProvider } from 'leaflet-geosearch';
import { POSITION, TileLayerOptions } from '../../../../../../const';
import MapComponent from '../map/map';

const AddressInput = ({ inputAddressValue, setInputAddressValue }) => {
    const [position, setPosition] = useState(POSITION);
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
            setInputAddressValue(result[0].label);
        }).catch(() => {
            return;
        });
    }, [address, setInputAddressValue]);

    const handleAddressInputChange = ({ target }) => {
        setInputAddressValue(target.value);
    };

    const handleAddressInputBlur = ({ target }) => {
        setAddress(target.value);
    };

    return (
        <div className="order-form__map-wrap">
            <div className='input__wrap'>
                <label className={(inputAddressValue === '') ? 'label' : 'label label--show'}
                    htmlFor="address">Адрес</label>
                <input
                    type="text"
                    className="input address-input"
                    id='address'
                    name='address'
                    placeholder='Ваш Адрес'
                    onChange={handleAddressInputChange}
                    onBlur={handleAddressInputBlur}
                    value={inputAddressValue}
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
