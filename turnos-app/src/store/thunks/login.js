import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }) => {
    const response = await axios.post("http://localhost:3001/api/user/login", {
      email,
      password,
    });

    return response.data;
  }
);

export { loginUser };
