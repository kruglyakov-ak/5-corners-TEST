import { combineReducers } from '@reduxjs/toolkit';
import { cartData } from './cart-data/cart-data';

enum NameSpace {
  Cart = 'CART'
}

const rootReducer = combineReducers({
  [NameSpace.Cart]: cartData,
});

type RootState = ReturnType<typeof rootReducer>;

export { NameSpace, rootReducer };
export type { RootState };
