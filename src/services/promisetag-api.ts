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
  title: string;
  description: string;
  tag_quantity?: string;
  storage_space_quantity?: string;
  storage_space_unit?: string;
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
    getTourPages: builder.query<TourPage[], null>({
      query: () => "/tour-pages",
    }),
    getCategories: builder.query<Category[], null>({
      query: () => "/categories",
    }),
  }),
});

export const { useGetTourPagesQuery, useGetCategoriesQuery } = promisetagApi;
