import { useSelector } from 'react-redux';
import { getProductsInCart } from '../../../../../../store/cart-data/selectors';
import ProductCard from './components/product-card/product-card';

function ProductCardsList() {
  const productsInCart = useSelector(getProductsInCart);

  return (

    <>
      <h2 className="subtitle">Выбранные товары:</h2>
      <div className="product-cards-wrap">
        {productsInCart.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <button type="submit" className="button">Купить</button>
    </>
  );
}

export default ProductCardsList;
