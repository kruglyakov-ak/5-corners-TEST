const OrderForm = () => (
    <form className='order-form'>
        <div className="map__wrap">
            <div className='addres-lable__wrap'>
                <label className='address-lable' htmlFor="address">Адрес</label>
                <input
                    type="text"
                    className="input address-input"
                    id='address'
                    name='address'
                    placeholder='Ваш Адрес'
                    defaultValue='г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152'
                    required
                />
            </div>
            <div className="map">
                <div className="total-price">
                    <span>Итог:</span><span>3790 руб.</span>
                </div>
            </div>
        </div>
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
