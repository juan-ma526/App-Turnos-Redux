import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { branchReducer } from "./slices/branchSlice";
import { shiftReducer } from "./slices/shiftSlice";
import { usersReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    branch: branchReducer,
    shift: shiftReducer,
  },
});

export { store };

export * from "./thunks/register";
export * from "./thunks/createOperator";
export * from "./thunks/getOperator";
export * from "./thunks/updateAdminClientOperator";
export * from "./thunks/login";
export * from "./thunks/getBranch";
export * from "./thunks/createBranch";
export * from "./thunks/createShift";
export * from "./thunks/getAllShiftByUser";
export * from "./thunks/cancelShift";
export * from "./thunks/assistShift";
