import { createSlice } from "@reduxjs/toolkit";
import { assistShift } from "../thunks/assistShift";
import { cancelShift } from "../thunks/cancelShift";
import { createShift } from "../thunks/createShift";
import { getAllShiftByUser } from "../thunks/getAllShiftByUser";

const shiftSlice = createSlice({
  name: "shift",
  initialState: {
    isLoading: false,
    error: false,
    dataShift: [],
    allDataShift: [],
    createdShift: false,
    msg: "",
  },
  reducers: {
    resetStore: (state, action) => {
      state.isLoading = false;
      state.createdShift = false;
      state.dataShift = [];
      state.error = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(createShift.pending, (state, action) => {
      state.isLoading = true;
      state.dataShift = [];
      state.createdShift = false;
      state.error = false;
    });
    builder.addCase(createShift.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataShift = action.payload;
      state.createdShift = true;
      state.error = false;
    });
    builder.addCase(createShift.rejected, (state, action) => {
      state.isLoading = false;

      state.createdShift = false;
      state.error = true;
    });
    builder.addCase(getAllShiftByUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllShiftByUser.fulfilled, (state, action) => {
      state.allDataShift = action.payload;
      state.isLoading = false;
      state.createdShift = true;
    });
    builder.addCase(getAllShiftByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.createdShift = false;
      state.error = true;
    });
    builder.addCase(cancelShift.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(cancelShift.fulfilled, (state, action) => {
      state.isLoading = false;
      state.msg = action.payload;
      state.createdShift = true;
      state.error = false;
    });
    builder.addCase(cancelShift.rejected, (state, action) => {
      state.isLoading = false;
      state.createdShift = false;
      state.error = true;
    });
    builder.addCase(assistShift.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(assistShift.fulfilled, (state, action) => {
      state.isLoading = false;
      state.msg = action.payload;
      state.createdShift = true;
      state.error = false;
    });
    builder.addCase(assistShift.rejected, (state, action) => {
      state.isLoading = false;
      state.createdShift = false;
      state.error = true;
    });
  },
});

export const { resetStore } = shiftSlice.actions;
export const shiftReducer = shiftSlice.reducer;
