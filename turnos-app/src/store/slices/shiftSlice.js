import { createSlice } from "@reduxjs/toolkit";
import { createShift } from "../thunks/createShift";

const shiftSlice = createSlice({
  name: "shift",
  initialState: {
    isLoading: false,
    error: null,
    data: [],
  },
  extraReducers(builder) {
    builder.addCase(createShift.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createShift.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(createShift.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const shiftReducer = shiftSlice.reducer;
