import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProductAmount, deleteProduct } from '../../../../../../../../store/action';
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
    amount,
    id
  } = product;
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(amount);

  useEffect(() => {
    dispatch(changeProductAmount(productCount, id));
  }, [dispatch, id, productCount]);

  const handleInputCountChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setProductCount(Number(target.value));
  };

  const handleInputCountBlur = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (Number(target.value) > 99) {
      setProductCount(99);
    } else if (Number(target.value) < 1) {
      setProductCount(1);
    } else {
      setProductCount(Number(target.value));
    }
  };

  const handleDecButtonClick = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const handleIncButtonClick = () => {
    if (productCount < 99) {
      setProductCount(productCount + 1);
    }
  };

  const validatePrice = () => {
    if (productCount === 0) {
      return price;
    }

    if (productCount > 99) {
      return price * 99;
    }

    return price * productCount;
  };

  const deleteButtonClick = () => {
    // eslint-disable-next-line no-alert
    if (!window.confirm('Удалить товар?')) {
      return;
    }
    dispatch(deleteProduct(id));
  };

  return (
    <article className="product-card">
      <img className="product-card__img" src={img} alt="Товар" width="150" height="150" />
      <div className="product-card__content">
        <div className="product-card-title__wrap">
          <p className="product-card-title">{name}</p>
          <p className="product-card-price">
            {validatePrice()} руб.
          </p>
        </div>
        <p className="product-card-description">{type} </p>
        <div className="product-card-counter__wrap">
          <div className="product-card-counter">
            <button className="counter-button counter-button__minus" type='button' onClick={handleDecButtonClick}></button>

            <input
              className="counter-input"
              type="number"
              value={productCount}
              onChange={handleInputCountChange}
              onBlur={handleInputCountBlur}
            />

            <button className="counter-button counter-button__plus" type='button' onClick={handleIncButtonClick}></button>
          </div>
          <button className="product-card-delete" type='button' onClick={deleteButtonClick}>Удалить</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
