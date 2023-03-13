import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createBranch = createAsyncThunk(
  "create/branch",
  async ({ name, email, phone, capMax, beginTime, closeTime }) => {
    const response = await axios.post(
      "http://localhost:3001/api/branch/createBranch",
      { name, email, phone, capMax, beginTime, closeTime }
    );

    return response.data;
  }
);

export { createBranch };
