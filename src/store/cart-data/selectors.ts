import { ProductInCart } from '../../type/product-in-cart';
import { State } from '../../type/state';
import { NameSpace } from '../root-reducer';

const getProductsInCart = (state: State): ProductInCart[] => state[NameSpace.Cart].productsInCart;

export {
  getProductsInCart
};
