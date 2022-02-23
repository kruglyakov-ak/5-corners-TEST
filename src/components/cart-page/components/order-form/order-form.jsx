import AddressInput from "./components/address-input/address-input";

const OrderForm = () => (
    <form className='order-form'>
        <AddressInput />
        <div className="order-form__wrap">
            <div className="first-row">
                <input
                    type="text"
                    className="input"
                    id='name'
                    name='name'
                    placeholder='Ваше Имя'
                    required
                />
                <input
                    type="tel"
                    className="input"
                    id='tel'
                    name='tel'
                    placeholder='Ваш Телефон'
                    required
                />
            </div>
            <input
                type="email"
                className="input"
                id='email'
                name='email'
                placeholder='Ваш Email'
                required
            />
            <input
                type="text"
                className="input"
                id='type'
                name='type'
                placeholder='Тип упаковки'
                required
            />
            <input
                type="comment"
                className="input"
                id='comment'
                name='comment'
                placeholder='Введите комментарий'
            />
        </div>
    </form>
);

export default OrderForm;
