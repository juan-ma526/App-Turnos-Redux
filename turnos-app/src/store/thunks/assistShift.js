import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const assistShift = createAsyncThunk("assist/shift", async ({ idShift }) => {
  const response = await axios.put("http://localhost:3001/api/shift/assist", {
    idShift,
  });
  return response.data;
});

export { assistShift };
