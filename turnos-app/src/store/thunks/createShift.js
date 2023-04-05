import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createShift = createAsyncThunk(
  "shift/create",
  async ({
    idBranch,
    idUser,
    fullName,
    email,
    phone,
    horaTurno,
    dateShift,
    value,
  }) => {
    const dateBooking = value;
    const hour = horaTurno;

    const response = await axios.post(
      `http://localhost:3001/api/shift/create/${idBranch}`,
      { hour, dateBooking, dateShift, fullName, email, phone, idUser }
    );

    return response.data;
  }
);

export { createShift };
