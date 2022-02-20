import Header from '../header/header';

const CartPage = () => (
    <>
        <Header />

        <main className='main-content'>

            <section className='breadcrumbs'>
                <a className='link breadcrumbs-link' href='/'>Главная</a>
                <a className='link breadcrumbs-link' href='/'>Корзина</a>
            </section>

            <section className='order'>
                <h1 className='order__title title'>Корзина</h1>
                <p className='autorization-answ'>
                    Есть аккаунт? <a className='link autorization-answ__link' href="/">Войти</a>
                </p>

                <form className='order-form'>
                    <div className="order-form__wrap">
                        <div className='addres-lable__wrap'>
                            <label className='address-lable' htmlFor="address">Адрес</label>
                            <input
                                type="text"
                                className="input address-input"
                                id='address'
                                name='address'
                                placeholder='Ваш Адрес'
                                value='г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152'
                                required
                                readOnly
                            />
                        </div>
                        <div className="second-row">
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



            </section>
        </main>
    </>
);

export default CartPage;
