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
    
  },
  statusShift: {
    type: String,
    default: "pending",
    
  },
  updatedAt: {
    type: String,
    default: "No updated!",
  },
});

module.exports = mongoose.model("Shifts", ShiftSchema);
