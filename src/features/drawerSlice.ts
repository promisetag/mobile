import { createSlice } from "@reduxjs/toolkit";

export interface DrawerState {
  visible: boolean;
}

const initialState: DrawerState = {
  visible: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggle: (state: DrawerState) => {
      state.visible = !state.visible;
    },
    open: (state: DrawerState) => {
      state.visible = true;
    },
    close: (state: DrawerState) => {
      state.visible = false;
    },
  },
});

export const { toggle, open, close } = drawerSlice.actions;
export default drawerSlice.reducer;
