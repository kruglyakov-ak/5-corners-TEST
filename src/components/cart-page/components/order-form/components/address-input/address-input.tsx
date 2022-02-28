import { useEffect, useState, ChangeEvent } from 'react';
import { MapBoxProvider } from 'leaflet-geosearch';
import { POSITION, TileLayerOptions } from '../../../../../../const';
import MapComponent from '../map/map';

type AddressInputProps = {
  inputAddressValue: string,
  setInputAddressValue: (address: string) => void
}

function AddressInput({ inputAddressValue, setInputAddressValue }: AddressInputProps) {
  const [position, setPosition] = useState(POSITION);
  const [address, setAddress] = useState('');
  const [totalPrice] = useState(0);

  useEffect(() => {
    const provider = new MapBoxProvider({
      params: {
        // eslint-disable-next-line camelcase
        access_token: TileLayerOptions.AccessToken,
      },
    });
    if (address !== '') {
      provider.search({ query: address }).then((result) => {
        const { x: lng, y: lat } = result[0];
        setPosition([lat, lng]);
        setInputAddressValue(result[0].label);
      });
    }
  }, [address, setInputAddressValue]);

  const handleAddressInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputAddressValue(target.value);
  };

  const handleAddressInputBlur = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setAddress(target.value);
  };

  return (
    <div className="order-form__map-wrap">
      <div className='input__wrap'>
        <label className={(inputAddressValue === '') ? 'label' : 'label label--show'}
          htmlFor="address"
        >Адрес
        </label>
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
        <span>Итог:</span><span>{totalPrice} руб.</span>
      </div>
    </div>
  );
}

export default AddressInput;
