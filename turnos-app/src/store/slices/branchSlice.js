import { createSlice } from "@reduxjs/toolkit";
import { getBranch } from "../thunks/getBranch";

const branchSlice = createSlice({
  name: "branch",
  initialState: {
    isLoading: false,
    data: [],
    loaded: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(getBranch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getBranch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.loaded = true;
    });
    builder.addCase(getBranch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const branchReducer = branchSlice.reducer;
