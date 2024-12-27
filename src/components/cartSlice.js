import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  showCart: false,
  viewCartButton: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const catName = action.payload;
      state.cart[catName] = (state.cart[catName] || 0) + 1;
    },
    decrement: (state, action) => {
      const catName = action.payload;
      if (catName && state.cart[catName]) {
        if (state.cart[catName] <= 0) {
          delete state.cart[catName];
        } else {
          state.cart[catName] -= 1;
        }
      }
    },
    checkout: (state) => {
      state.cart = {};
      state.showCart = false;
      state.viewCartButton = true;
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
      state.viewCartButton = !state.viewCartButton;
    },
  },
});

export const {
  decrement,
  increment,
  checkout,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;
