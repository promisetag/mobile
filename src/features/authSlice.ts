import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  name?: string;
  email?: string;
}
export interface AuthState {
  authenticated: boolean;
  token?: string;
  user?: AuthUser;
}

const initialState: AuthState = {
  authenticated: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
    logout: (state: AuthState) => {
      state = {
        authenticated: false,
        token: null,
        user: null,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
