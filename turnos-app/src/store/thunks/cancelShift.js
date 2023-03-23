import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cancelShift = createAsyncThunk("cancelled/shift", async ({ idShift }) => {
  const response = await axios.put(
    "http://localhost:3001/api/shift/cancelShift",
    {
      idShift,
    }
  );
  return response.data;
});

export { cancelShift };
