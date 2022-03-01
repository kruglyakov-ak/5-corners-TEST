import { FetchProduct } from '../../type/fetch-product';
import { ProductInCart } from '../../type/product-in-cart';
import { State } from '../../type/state';
import { NameSpace } from '../root-reducer';

const getProductsInCart = (state: State): ProductInCart[] => state[NameSpace.Cart].productsInCart;
const getProducts = (state: State): FetchProduct[] => state[NameSpace.Cart].productsInCart.map((product) => ({
  id: product.id,
  amount: product.amount,
  price: product.price
}));

export {
  getProductsInCart,
  getProducts
};
