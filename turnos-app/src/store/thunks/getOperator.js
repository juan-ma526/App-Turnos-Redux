import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getOperator = createAsyncThunk("get/operator", async () => {
  const response = await axios.get(
    "http://localhost:3001/api/user/allOperators"
  );

  return response.data;
});

export { getOperator };
