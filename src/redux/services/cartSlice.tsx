import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, InitialType } from "../../types/type";

const initialState: InitialType = {
  quantity: 0,
  totalAmount: 0,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartItemType>) => {
      const isExist = state.cart.find((item) => item.id === payload.id);
      if (!isExist) {
        state.cart.push({ ...payload, quantity: 1 });
        state.quantity++;
        state.totalAmount += payload.price;
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<CartItemType>) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
      state.totalAmount = state.cart.reduce(
        (pv, cv) => pv + cv.price * cv.quantity,
        0
      );
      state.quantity -= payload.quantity;
    },
    increaseQuantity: (state, { payload }: PayloadAction<CartItemType>) => {
      const item = state.cart.find((item) => item.id === payload.id);
      if (item) {
        item.quantity++;
        state.quantity++;
        state.totalAmount += item.price;
      }
    },
    decreaseQuantity: (state, { payload }: PayloadAction<CartItemType>) => {
      const item = state.cart.find((item) => item.id === payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.quantity--;
        state.totalAmount -= item.price;
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.quantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
