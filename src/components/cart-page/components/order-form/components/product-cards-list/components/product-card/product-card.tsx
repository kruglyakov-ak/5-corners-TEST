import { ProductInCart } from '../../../../../../../../type/product-in-cart';

type ProductCardProps = {
  product: ProductInCart;
}

function ProductCard({ product }: ProductCardProps) {
  const {
    img,
    name,
    price,
    type,
    amount
  } = product;

  return (
    <article className="product-card">
      <img className="product-card__img" src={img} alt="Товар" width="150" height="150" />
      <div className="product-card__content">
        <div className="product-card-title__wrap">
          <p className="product-card-title">{name}</p>
          <p className="product-card-price">{price*amount} руб.</p>
        </div>
        <p className="product-card-description">{type} </p>
        <div className="product-card-counter__wrap">
          <div className="product-card-counter">
            <button className="counter-button counter-button__minus"></button>

            <input className="counter-input" type="number" defaultValue={amount} />

            <button className="counter-button counter-button__plus"></button>
          </div>
          <button className="product-card-delete">Удалить</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
