import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../services/promisetag-api";

export interface CategoryState {
  id?: number;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  tagQuantity?: string;
  storageSpaceQuantity?: string;
  storageSpaceUnit?: string;
}

const initialState = {
  id: null,
  backgroundColor: null,
  backgroundImageUrl: null,
  imageUrl: null,
  title: null,
  description: null,
  tagQuantity: null,
  storageSpaceQuantity: null,
  storageSpaceUnit: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category>) => {
      state.id = action.payload.id;
      state.backgroundColor = action.payload.background_color;
      state.imageUrl = action.payload.image_url;
      state.backgroundImageUrl = action.payload.background_image_url;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.tagQuantity = action.payload.tag_quantity;
      state.storageSpaceQuantity = action.payload.storage_space_quantity;
      state.storageSpaceUnit = action.payload.storage_space_unit;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
