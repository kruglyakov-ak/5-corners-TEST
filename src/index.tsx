import React from 'react';
import ReactDOM from 'react-dom';
import { createAPI } from './services/api';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { rootReducer } from './store/root-reducer';
import { fetchProductsInCart } from './store/api-actions';

const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

(store.dispatch)(fetchProductsInCart());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
