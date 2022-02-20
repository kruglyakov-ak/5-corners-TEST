import Header from '../header/header';

const CartPage = () => (
    <>
        <Header />

        <main className='main-content'>
            <section className='breadcrumbs'>
                <a className='link breadcrumbs-link' href='/'>Главная</a>
                <a className='link breadcrumbs-link' href='/'>Корзина</a>
            </section>
        </main>
    </>
);

export default CartPage;
