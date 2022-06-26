import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LocalNavigationState {
  nextRoute: string | null;
}

const initialState: LocalNavigationState = {
  nextRoute: null,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNextRoute: (
      state: LocalNavigationState,
      action: PayloadAction<string>
    ) => {
      state.nextRoute = action.payload;
    },
    removeNextRoute: (state: LocalNavigationState) => {
        state.nextRoute = null
    }
  },
});

export const { setNextRoute } = navigationSlice.actions;
export default navigationSlice.reducer;
