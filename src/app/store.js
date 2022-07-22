import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../reducers/cartSlice';
import loginSlice from '../reducers/loginSlice';
import productSlice from '../reducers/productSlice';
export const store = configureStore({
  reducer: {
    login: loginSlice,
    cart: cartSlice,
    product: productSlice,
  },
});
