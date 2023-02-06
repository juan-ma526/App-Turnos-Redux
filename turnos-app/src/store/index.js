import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { usersReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },
});

export { store };

export * from "./thunks/register";
export * from "./thunks/login";
