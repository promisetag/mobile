import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TourPage {
  background_color: string;
  image_url: string;
  title: string;
  subtitle: string;
}

export interface Category {
  id: number;
  background_color: string;
  image_url: string;
  background_image_url: string;
  title: string;
  description: string;
  tag_quantity?: string;
  storage_space_quantity?: string;
  storage_space_unit?: string;
}

export interface ProductImage {
  id: number;
  image_url: string;
  thumbnail_url: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  reviews_count: number;
  reviews_avg_rating: number;
  original_price: number;
  discounted_price: number;
  quantity: number;
  quantity_threshold: number;
  images: ProductImage[];
}

export interface User {
  name: string;
  email: string;
  phone: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface AuthBody {
  email: string;
  password: string;
  device_name: string;
}

export const promisetagApi = createApi({
  reducerPath: "tourApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://43.204.116.96/api/v1",
    prepareHeaders: (headers, api) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTourPages: builder.query<TourPage[], void>({
      query: () => "/tour-pages",
    }),
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
    loginByEmailAndPassword: builder.mutation<AuthResponse, AuthBody>({
      query: (authBody) => ({
        url: `user/login`,
        method: "POST",
        body: authBody,
      }),
    }),
  }),
});

export const {
  useGetTourPagesQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useLoginByEmailAndPasswordMutation,
} = promisetagApi;
