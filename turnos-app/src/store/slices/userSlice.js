import { createSlice } from "@reduxjs/toolkit";
import { createOperator } from "../thunks/createOperator";
import { getOperator } from "../thunks/getOperator";
import { registerUser } from "../thunks/register";
import { updateUser } from "../thunks/updateAdminClientOperator";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isCreating: false,
    created: false,
    error: null,
    msg: "",
  },

  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isCreating = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isCreating = false;
      state.created = true;
      state.data.push(action.payload);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isCreating = false;
      state.error = action.error;
    });
    builder.addCase(createOperator.pending, (state, action) => {
      state.isCreating = true;
    });
    builder.addCase(createOperator.fulfilled, (state, action) => {
      state.isCreating = false;
      state.data.push(action.payload);
      state.created = true;
    });
    builder.addCase(createOperator.rejected, (state, action) => {
      state.isCreating = false;
      state.error = action.error;
    });
    builder.addCase(getOperator.pending, (state, action) => {
      state.isCreating = true;
    });
    builder.addCase(getOperator.fulfilled, (state, action) => {
      state.isCreating = false;
      state.data = action.payload;
      state.created = true;
    });
    builder.addCase(getOperator.rejected, (state, action) => {
      state.isCreating = false;
      state.error = action.error;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.isCreating = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isCreating = false;
      state.msg = action.payload;
      state.created = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isCreating = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
