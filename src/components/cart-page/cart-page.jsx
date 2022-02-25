import OrderForm from './components/order-form/order-form';

const CartPage = () => (
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

            <OrderForm />
        </section>
    </main>
);

export default CartPage;
