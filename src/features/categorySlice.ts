import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  name?: string;
}

const initialState = {
  name: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
