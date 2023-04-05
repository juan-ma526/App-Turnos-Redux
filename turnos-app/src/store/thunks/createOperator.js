import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createOperator = createAsyncThunk(
  "create/operator",
  async ({ id, fullName, password, email, idBranch, nameBranch, dni }) => {
    const response = await axios.post(
      "http://localhost:3001/api/user/createOperator",
      { id, fullName, password, email, idBranch, nameBranch, dni }
    );
    return response.data;
  }
);

export { createOperator };
