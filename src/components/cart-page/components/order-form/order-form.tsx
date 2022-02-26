import { useState } from "react";
import AddressInput from "./components/address-input/address-input";
import ProductCardsList from "./components/product-cards-list/product-cards-list";

const OrderForm = () => {
  const [inputAddressValue, setInputAddressValue] = useState('');
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputTelValue, setInputTelValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputTypeValue, setInputTypeValue] = useState('');
  const [inputTypeIsShow, setInputTypeIsShow] = useState(false);
  const [inputCommentValue, setInputCommentValue] = useState('');

  const handleInputNameChange = ({ target }) => {
    setInputNameValue(target.value);
  }

  const handleInputTelChange = ({ target }) => {
    setInputTelValue(target.value);
  }

  const handleInputEmailChange = ({ target }) => {
    setInputEmailValue(target.value);
  }

  const handleInputTypeShowButtonClick = () => {
    setInputTypeIsShow(!inputTypeIsShow);
  };

  const handleInputTypeClick = ({ target }) => {
    setInputTypeValue(target.innerText);
    setInputTypeIsShow(false);
  }

  const handleInputCommentChange = ({ target }) => {
    setInputCommentValue(target.value);
  }

  const resetForm = () => {
    setInputAddressValue('');
    setInputNameValue('');
    setInputTelValue('');
    setInputEmailValue('');
    setInputTypeValue('');
    setInputCommentValue('');
  };

  const handleSubmitButtonClick = (evt) => {
    evt.preventDefault();

    if (inputAddressValue !== '' &&
      inputNameValue !== '' &&
      inputTelValue !== '' &&
      inputEmailValue !== '' &&
      inputTypeValue !== '') {
      console.log({
        address: inputAddressValue,
        name: inputNameValue,
        tel: inputTelValue,
        email: inputEmailValue,
        type: inputTypeValue,
        comment: inputCommentValue,
      });
      resetForm();
    }

  };

  return (
    <form className='order-form' onSubmit={handleSubmitButtonClick}>
      <AddressInput inputAddressValue={inputAddressValue} setInputAddressValue={setInputAddressValue} />
      <div className="order-form__wrap">
        <div className="first-row">
          <div className='input__wrap'>
            <label className={(inputNameValue === '') ? 'label' : 'label label--show'}
              htmlFor="name">Имя</label>
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
              htmlFor="name">Телефон</label>
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
            htmlFor="name">Email</label>
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
              htmlFor="name">Тип упаковки</label>
            <input
              type="text"
              className={inputTypeIsShow ? "input input-type--show" : "input"}
              id='type'
              name='type'
              value={inputTypeValue}
              placeholder='Тип упаковки'
              readOnly
              required
            />
          </div>
          <button
            type="button"
            className={inputTypeIsShow ? "input-type__show-button input-type__show-button--up" : "input-type__show-button input-type__show-button--down"}
            onClick={handleInputTypeShowButtonClick}
          ></button>
          <ul className={inputTypeIsShow ? "input-type__content-list input-type__content-list--show" : "input-type__content-list"}
            onClick={handleInputTypeClick}>
            <li>Без упаковки</li>
            <li>Стандартная</li>
            <li>Подарочная</li>
          </ul>
        </div>
        <div className='input__wrap'>
          <label className={(inputCommentValue === '') ? 'label' : 'label label--show'}
            htmlFor="name">Комментарий</label>
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
  )
};

export default OrderForm;
