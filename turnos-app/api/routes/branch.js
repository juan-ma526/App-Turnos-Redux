const express = require("express");
const router = express.Router();

const {
  validateAuth,
  validateAdmin,
  validateOperator,
} = require("../middleware/auth");

const {
  createBranch,
  allOperatorsInBranch,
  allBranchs,
  branchById,
  updateBranch,
  deleteBranch,
  deleteShifts,
} = require("../controllers/branch");

//Crea una sucursal.
router.post("/createBranch", validateAuth, validateAdmin, createBranch);

//Borra TODOS los turnos adjuntados en la DB de la sucursal por su ID.
router.post("/deleteShifts/:id", deleteShifts);

//Trae todas las sucursales.
router.get("/allBranchs", allBranchs); //router.get("/allBranchs", validateAuth, validateAdmin, allBranchs)

//Trae una sucursal por su ID.
router.get("/branchById/:id", validateAuth, validateAdmin, branchById);

//Muestra los ID de los operadores.
router.get("/operators/:id", validateAuth, validateAdmin, allOperatorsInBranch);

//Actualiza una sucursal.
router.put("/updateBranch/:id", validateAuth, validateAdmin, updateBranch);

//DANGER ZONE. Borra una sucursal.
router.delete("/delete", validateAuth, validateAdmin, deleteBranch);

module.exports = router;
