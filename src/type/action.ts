import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from './state';

enum ActionType {
  LoadProductsInCart = 'cart/loadProductsInCart',
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {
  ActionType
};

export type {
  ThunkActionResult
};
