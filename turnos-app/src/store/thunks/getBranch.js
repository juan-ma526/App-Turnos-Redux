import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getBranch = createAsyncThunk("get/branch", async () => {
  const response = await axios.get(
    "http://localhost:3001/api/branch/allBranchs"
  );

  return response.data;
});

export { getBranch };
