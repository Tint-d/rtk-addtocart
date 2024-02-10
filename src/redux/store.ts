import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./services/cartSlice";
import { productApi } from "./api/productApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
