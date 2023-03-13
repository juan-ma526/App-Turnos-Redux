import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateUser = createAsyncThunk(
  "update/user",
  async ({ id, password, phone }) => {
    const response = await axios.put(
      "http://localhost:3001/api/user/updateUser",
      { id, password, phone }
    );

    return response.data;
  }
);

export { updateUser };
