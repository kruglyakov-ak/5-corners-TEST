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

const changeProductAmount = createAction(
  ActionType.ChangeProductAmount,
  (amount: number, id: string) => ({
    payload: {
      amount,
      id
    },
  }),
);

const deleteProduct = createAction(
  ActionType.DeleteProduct,
  (id: string) => ({
    payload: {
      id
    },
  }),
);

const changeTotalPrice = createAction(
  ActionType.ChangeTotalPrice,
  (price) => ({
    payload: {
      price
    },
  }),
);

export {
  loadProductsInCart,
  changeProductAmount,
  deleteProduct,
  changeTotalPrice
};
