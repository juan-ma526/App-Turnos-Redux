const express = require("express");
const router = express.Router();

const {
  validateAuth,
  validateAdmin,
  validateOperator,
} = require("../middleware/auth");

const {
  registerUser,
  allUsers,
  loginUser,
  loggedUser,
  //forgottenPassword,
  deleteUser,
  changeAdmin,
  changeOperator,
  logout,
  updateLogedUser,
  allOperators,
  usersByBranch,
  createOperator,
} = require("../controllers/user");

//Registrar usuario
router.post("/register", registerUser);

//Crear operador
router.post("/createOperator", createOperator);

//Mostrar en consola a todos los usuarios.
router.get("/allUsers", allUsers);

//Función para mostrar a todos los operadores.
router.get("/allOperators", allOperators); //router.get("/allOperators", validateAuth, validateAdmin, allOperators);

//Función para buscar operadores mediante su idBranch.
router.get("/usersByBranch/:id", usersByBranch); //router.get("/usersByBranch/:id", validateAuth, validateAdmin, usersByBranch);

//Recibir perfil de usuario logeado
router.get("/me", loggedUser); //router.get("/me", validateAuth, loggedUser);

//Logearse
router.post("/login", loginUser);

//Actualizar contraseña olvidada
//router.put("/changepassword", forgottenPassword);

//Actualizar usuario logeado

router.put("/updateUser", updateLogedUser); //router.put("/updateUser", validateAuth, updateLogedUser);

//Borrar usuario
router.delete("/deleteUser/:id", deleteUser); //router.delete("/deleteUser/:id", validateAuth, validateAdmin, deleteUser);

//Actualizar rol a administrador
router.put("/setAdmin/:id", changeAdmin); //router.put("/setAdmin/:id", validateAuth, changeAdmin);

//Actualizar a rol de Operador
router.put("/setOperator/:id", changeOperator); //router.put("/setOperator/:id", validateAuth, changeOperator);

//Logout
router.post("/logout", logout); //router.post("/logout", validateAuth, logout);
module.exports = router;
