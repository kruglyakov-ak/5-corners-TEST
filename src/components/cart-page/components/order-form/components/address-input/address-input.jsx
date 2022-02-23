import { useState } from 'react';
import { POSITION } from '../../../../../../const';
import MapComponent from '../map/map';

const AddressInput = () => {
    const [position, setPosition] = useState(POSITION);

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
                    value={position}
                    required
                />
            </div>

            <MapComponent position={position} setPosition={setPosition}/>

            <div className="total-price">
                <span>Итог:</span><span>3790 руб.</span>
            </div>
        </div>
    )
};

export default AddressInput;
