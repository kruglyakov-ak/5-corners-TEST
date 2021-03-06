import { RootState } from '../store/root-reducer';
import { ProductInCart } from './product-in-cart';

type State = RootState;

type CartData = {
  productsInCart: ProductInCart[],
  totalPrice: number,
};

export type {
  State,
  CartData
};
