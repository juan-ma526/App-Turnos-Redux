import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registerUser = createAsyncThunk(
  "users/register",
  async ({ fullName, email, password, dni }) => {
    const response = await axios.post(
      `http://localhost:3001/api/user/register`,
      { fullName, email, password, dni }
    );

    return response.data;
  }
);

export { registerUser };
