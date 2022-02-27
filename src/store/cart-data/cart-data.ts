import { createReducer } from '@reduxjs/toolkit';
import { CartData } from '../../type/state';
import { loadProductsInCart } from '../action';

const initialState: CartData = {
  productsInCart: [],
};

const cartData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProductsInCart, (state, action) => {
      const { productsInCart } = action.payload;
      state.productsInCart = productsInCart;
    });
});

export { cartData };
