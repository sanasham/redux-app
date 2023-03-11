import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items = state?.items?.filter((item, i) => {
        let items;
        if (item !== action.payload) {
          items = state.items.slice(i, 1);
        }
        return items;
      });
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
