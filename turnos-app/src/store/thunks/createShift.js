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
    dayshift,
    value,
  }) => {
    const dateBooking = value;
    const prueba = value.getDate();
    console.log(idBranch, "idbranch");
    console.log(idUser, "iduser");
    console.log(fullName, "fullname");
    console.log(email, "email");
    console.log(phone, "phone");
    console.log(horaTurno, "horaturno");
    console.log(dayshift, "dayshift");
    console.log(dateBooking, "datebooking");
    console.log(prueba);
    /* const response = await axios.post(
    `http://localhost:3001/api/shift/create/:id`,
    {}
  ); */

    /* return response.data; */
  }
);

export { createShift };

/*
idBranch: {
    type: String,
  },
  idUser: {
    type: String,
  },
  infoUser: {
    type: Object,
    default: "none",
  },
  dateBooking: {
    type: String,
  },
  dateShift: {
    type: Array,
  },
  statusHour: {
    type: String,
    //STATUS "occupied" = OCUPADO. STATUS "cancelled" = CANCELADO. STATUS "finished" = finalizado.
  },
  statusShift: {
    type: String,
    default: "pending",
    //STATUS "pending" = PENDIENTE. STATUS "assist" = ASISTIÓ. STATUS "no assist" = NO ASISTIÓ.
  },
  updatedAt: {
    type: String,
    default: "No updated!",
*/
