import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllShiftByUser = createAsyncThunk("get/allShiftByUser", async () => {
  const response = await axios.get("http://localhost:3001/api/shift/allShifts");

  return response.data;
});

export { getAllShiftByUser };
