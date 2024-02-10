import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItemType } from "../../types/type";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<CartItemType[], void>({
      query: () => `/products`,
    }),
    productDetail: builder.query<CartItemType, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useProductDetailQuery } = productApi;
