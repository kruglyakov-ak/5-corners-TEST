import { ProductInCart } from '../../type/product-in-cart';
import { State } from '../../type/state';
import { NameSpace } from '../root-reducer';

const getProductsInCart = (state: State): ProductInCart[] => state[NameSpace.Cart].productsInCart;
const getPrices = (state: State): { price: number, amount: number }[] => state[NameSpace.Cart].productsInCart.map((product) => ({
  amount: product.amount,
  price: product.price
}));

export {
  getProductsInCart,
  getPrices
};
