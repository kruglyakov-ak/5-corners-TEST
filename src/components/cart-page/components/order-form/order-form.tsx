import { useState, ChangeEvent, FormEvent, MouseEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { POSITION } from '../../../../const';
import { getProducts } from '../../../../store/cart-data/selectors';
import { CartFetchData } from '../../../../type/cart-fetch-data';
import AddressInput from './components/address-input/address-input';
import ProductCardsList from './components/product-cards-list/product-cards-list';

function OrderForm() {
  const [inputAddressValue, setInputAddressValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputTelValue, setInputTelValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputTypeValue, setInputTypeValue] = useState('');
  const [inputTypeIsShow, setInputTypeIsShow] = useState(false);
  const [inputCommentValue, setInputCommentValue] = useState('');
  const [position, setPosition] = useState(POSITION);
  const products = useSelector(getProducts);
  const [cartFetchData, setCartFetchData] = useState<CartFetchData>({
    address: inputAddressValue,
    position: position,
    name: inputNameValue,
    tel: inputTelValue,
    email: inputEmailValue,
    type: inputTypeValue,
    comment: inputCommentValue,
    totalPrice: totalPrice,
    products: products,
  });

  useEffect(() => {
    const price = products.reduce((prev, curr) => prev + curr.amount * curr.price, 0);
    setTotalPrice(price);
  }, [products, setTotalPrice]);

  useEffect(() => {
    setCartFetchData({
      address: inputAddressValue,
      position: position,
      name: inputNameValue,
      tel: inputTelValue,
      email: inputEmailValue,
      type: inputTypeValue,
      comment: inputCommentValue,
      totalPrice: totalPrice,
      products: products,
    });
  }, [inputAddressValue, inputCommentValue, inputEmailValue, inputNameValue, inputTelValue, inputTypeValue, position, products, totalPrice]);

  const handleInputNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(target.value);
  };

  const handleInputTelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputTelValue(target.value);
  };

  const handleInputEmailChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(target.value);
  };

  const handleInputTypeShowButtonClick = () => {
    setInputTypeIsShow(!inputTypeIsShow);
  };

  const handleItemTypeClick = ({ currentTarget }: MouseEvent<HTMLLIElement>) => {
    setInputTypeValue(String(currentTarget.textContent));
    setInputTypeIsShow(false);
  };

  const handleInputCommentChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputCommentValue(target.value);
  };

  const resetForm = () => {
    setInputAddressValue('');
    setInputNameValue('');
    setInputTelValue('');
    setInputEmailValue('');
    setInputTypeValue('');
    setInputCommentValue('');
  };

  const handleSubmitButtonClick = (evt: FormEvent) => {
    evt.preventDefault();

    if (inputAddressValue !== '' &&
      inputNameValue !== '' &&
      inputTelValue !== '' &&
      inputEmailValue !== '' &&
      inputTypeValue !== '') {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(cartFetchData));
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(cartFetchData));
      resetForm();
    }
  };

  return (
    <form className='order-form' onSubmit={handleSubmitButtonClick}>
      <AddressInput
        position={position}
        setPosition={setPosition}
        inputAddressValue={inputAddressValue}
        setInputAddressValue={setInputAddressValue}
        totalPrice={totalPrice}
      />
      <div className="order-form__wrap">
        <div className="first-row">
          <div className='input__wrap'>
            <label className={(inputNameValue === '') ? 'label' : 'label label--show'}
              htmlFor="name"
            >Имя
            </label>
            <input
              type="text"
              className="input"
              id='name'
              name='name'
              placeholder='Ваше Имя'
              value={inputNameValue}
              onChange={handleInputNameChange}
              required
            />
          </div>
          <div className='input__wrap'>
            <label className={(inputTelValue === '') ? 'label' : 'label label--show'}
              htmlFor="name"
            >Телефон
            </label>
            <input
              type="tel"
              className="input"
              id='tel'
              name='tel'
              value={inputTelValue}
              onChange={handleInputTelChange}
              placeholder='Ваш Телефон'
              required
            />
          </div>
        </div>
        <div className='input__wrap'>
          <label className={(inputEmailValue === '') ? 'label' : 'label label--show'}
            htmlFor="name"
          >Email
          </label>
          <input
            type="email"
            className="input"
            id='email'
            name='email'
            value={inputEmailValue}
            onChange={handleInputEmailChange}
            placeholder='Ваш Email'
            required
          />
        </div>
        <div className="input-type__wrap">
          <div className='input__wrap'>
            <label className={(inputTypeValue === '') ? 'label' : 'label label--show'}
              htmlFor="name"
            >Тип упаковки
            </label>
            <input
              type="text"
              className={inputTypeIsShow ? 'input input-type--show' : 'input'}
              id='type'
              name='type'
              value={inputTypeValue}
              placeholder='Тип упаковки'
              readOnly
              required
              onClick={handleInputTypeShowButtonClick}
            />
          </div>
          <button
            type="button"
            className={inputTypeIsShow ? 'input-type__show-button input-type__show-button--up' : 'input-type__show-button input-type__show-button--down'}
            onClick={handleInputTypeShowButtonClick}
          >
          </button>
          <ul className={inputTypeIsShow ? 'input-type__content-list input-type__content-list--show' : 'input-type__content-list'}>
            <li onClick={handleItemTypeClick}>Без упаковки</li>
            <li onClick={handleItemTypeClick}>Стандартная</li>
            <li onClick={handleItemTypeClick}>Подарочная</li>
          </ul>
        </div>
        <div className='input__wrap'>
          <label className={(inputCommentValue === '') ? 'label' : 'label label--show'}
            htmlFor="name"
          >Комментарий
          </label>
          <input
            type="comment"
            className="input"
            id='comment'
            name='comment'
            value={inputCommentValue}
            onChange={handleInputCommentChange}
            placeholder='Введите комментарий'
          />
        </div>
      </div>

      <ProductCardsList />

    </form>
  );
}

export default OrderForm;
