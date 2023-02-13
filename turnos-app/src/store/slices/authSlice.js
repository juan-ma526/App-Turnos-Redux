import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/login";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: null,
    isLogin: "false",
    loged: "false",
    error: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = JSON.parse(localStorage.getItem("user"));
    },
    logout: (state, action) => {
      state.token = "";
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLogin = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogin = false;
      state.loged = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLogin = false;
      state.error = action.error;
    });
  },
});
export const { addToken, addUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
