/* const express = require("express");
const router = express.Router();

const { validateAuth, validateAdmin, validateOperator } = require("../middleware/auth");

const {
  createShifts,
  allShifts,
  deleteShifts,
  updateShift,
  shiftById,
  assist,
  noAssist,
  cancelShift,
  shiftsOnBranch,
  shiftsByUserId,
  //////////////////////////////
  noAssistShifts,
  assistShifts,
  cancelledShifts,
  pendingShifts,
} = require("../controllers/shifts.js");

//Trae turnos de una sucursal en especial.
  router.get("/onBranch/:id", shiftsOnBranch);

  //Trae turnos de un usuario.
  router.get("/shiftsByUserId", shiftsByUserId);

  //Trae todos los turnos.
  router.get('/allShifts', allShifts);

  //Trae turnos por su ID.
  router.get('/catchShift', shiftById);

  //Ruta para crear turnos
  router.post('/create/:id', createShifts);

  //Marcar un turno como asistido.
  router.put("/assist", assist);

  //Marcar un turno como NO asistido.
  router.put("/noassist", noAssist);

  //Cancelar un turno.
  router.put("/cancelShift", cancelShift);

  //Actualizar un turno.
  router.put('/updateShift', updateShift);

  //DANGER ZONE
  router.delete('/deleteAll', deleteShifts);


  //ADICIONALES
  router.get("/noAssistShifts", noAssistShifts);
  router.get("/assistShifts", assistShifts);
  router.get("/cancelledShifts", cancelledShifts);
  router.get("/pendingShifts", pendingShifts);

module.exports = router; */
