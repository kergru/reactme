/**
 * Defines the Redux Toolkit store used by the Redux demo, including the sample
 * cart slice and exported actions for connected components.
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: 1
  },
  reducers: {
    addItem: (state) => {
      state.items += 1;
    },
    removeItem: (state) => {
      state.items = Math.max(0, state.items - 1);
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export const rootReducer = {
  cart: cartSlice.reducer
};

export const store = configureStore({
  reducer: rootReducer
});
