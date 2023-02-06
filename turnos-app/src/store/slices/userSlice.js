import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../thunks/register";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isCreating: false,
    created: false,
    error: null,
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
  },
});

export const usersReducer = usersSlice.reducer;
