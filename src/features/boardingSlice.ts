import { createSlice } from "@reduxjs/toolkit";

export interface BoardingState {
  value: boolean;
}

const initialState: BoardingState = {
  value: true,
};

export const boardingSlice = createSlice({
  name: "boarding",
  initialState,
  reducers: {
    userBoarded: (state) => {
      state.value = true;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { userBoarded, toggle } = boardingSlice.actions;
export default boardingSlice.reducer;
