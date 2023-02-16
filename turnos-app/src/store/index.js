import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { branchReducer } from "./slices/branchSlice";
import { usersReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    branch: branchReducer,
  },
});

export { store };

export * from "./thunks/register";
export * from "./thunks/login";
export * from "./thunks/getBranch";
