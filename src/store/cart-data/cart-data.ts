import { createReducer } from '@reduxjs/toolkit';
import { CartData } from '../../type/state';
import { changeProductAmount, changeTotalPrice, deleteProduct, loadProductsInCart } from '../action';

const initialState: CartData = {
  productsInCart: [],
  totalPrice: 0,
};

const cartData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProductsInCart, (state, action) => {
      const { productsInCart } = action.payload;
      state.productsInCart = productsInCart;
    })
    .addCase(changeProductAmount, (state, action) => {
      const { amount, id } = action.payload;
      state.productsInCart.forEach((product, index, arr) => {
        if (product.id === id) {
          arr[index].amount = amount;
        }
      });
    })
    .addCase(deleteProduct, (state, action) => {
      const { id } = action.payload;
      const i = state.productsInCart.findIndex((product) => product.id === id);
      state.productsInCart.splice(i, 1);
    })
    .addCase(changeTotalPrice, (state, action) => {
      const { price } = action.payload;
      state.totalPrice = price;
    });
});

export { cartData };
