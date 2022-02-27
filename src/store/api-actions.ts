import { ThunkActionResult } from '../type/action';
import { loadProductsInCart } from './action';

const fetchProductsInCart = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<string>('/');
    dispatch(loadProductsInCart(JSON.parse(data)));
  };

export {
  fetchProductsInCart
};
