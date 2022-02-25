const ProductCardsList = () => (
    <>
        <h2 className="subtitle">Выбранные товары:</h2><div className="product-cards-wrap">
            <article className="product-card">
                <img className="product-card__img" src="/img/product.png" alt="Товар" width="150" height="150" />
                <div className="product-card__content">
                    <div className="product-card-title__wrap">
                        <p className="product-card-title">Товар 1</p>
                        <p className="product-card-price">1090 руб.</p>
                    </div>
                    <p className="product-card-description">Описание товара, которое может быть очень-очень длинным</p>
                    <div className="product-card-counter__wrap">
                        <div className="product-card-counter">
                            <button className="counter-button counter-button__minus"></button>

                            <input className="counter-input" type="number" defaultValue="1" />

                            <button className="counter-button counter-button__plus"></button>
                        </div>
                        <button className="product-card-delete">Удалить</button>
                    </div>
                </div>
            </article>
        </div>
        <button type="submit" className="button">Купить</button>
    </>
);

export default ProductCardsList;
