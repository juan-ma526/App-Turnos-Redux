import { createSlice } from "@reduxjs/toolkit";
import { createShift } from "../thunks/createShift";
import { getAllShiftByUser } from "../thunks/getAllShiftByUser";

const shiftSlice = createSlice({
  name: "shift",
  initialState: {
    isLoading: false,
    error: false,
    dataShift: [],
    created: false,
  },
  reducers: {
    resetStore: (state, action) => {
      state.isLoading = false;
      state.created = false;
      state.dataShift = [];
      state.error = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(createShift.pending, (state, action) => {
      state.isLoading = true;
      state.dataShift = [];
      state.created = false;
      state.error = false;
    });
    builder.addCase(createShift.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataShift = action.payload;
      state.created = true;
      state.error = false;
    });
    builder.addCase(createShift.rejected, (state, action) => {
      state.isLoading = false;
      state.created = false;
      state.error = true;
    });
    builder.addCase(getAllShiftByUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllShiftByUser.fulfilled, (state, action) => {
      state.dataShift = action.payload;
      state.isLoading = false;
      state.created = true;
    });
    builder.addCase(getAllShiftByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.created = false;
      state.error = true;
    });
  },
});

export const { resetStore } = shiftSlice.actions;
export const shiftReducer = shiftSlice.reducer;
