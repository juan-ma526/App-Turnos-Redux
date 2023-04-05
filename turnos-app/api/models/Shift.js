const mongoose = require("mongoose");

const ShiftSchema = new mongoose.Schema({
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
    type: String,
  },
  statusHour: {
    type: String,
    //STATUS "occupied" = OCUPADO. STATUS "cancelled" = CANCELADO. STATUS "finished" = finalizado. STATUS "expired" = EXPIRADO.
  },
  statusShift: {
    type: String,
    default: "pending",
    //STATUS "pending" = PENDIENTE. STATUS "assist" = ASISTIÓ. STATUS "no assist" = NO ASISTIÓ. 
  },
  updatedAt: {
    type: String,
    default: "No updated!",
  },
});

module.exports = mongoose.model("Shifts", ShiftSchema);
