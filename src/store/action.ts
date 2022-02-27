import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../type/action';
import { ProductInCart } from '../type/product-in-cart';

const loadProductsInCart = createAction(
  ActionType.LoadProductsInCart,
  (productsInCart: ProductInCart[]) => ({
    payload: {
      productsInCart,
    },
  }),
);

export {
  loadProductsInCart
};
