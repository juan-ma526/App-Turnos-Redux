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

//Schema SWAGGER doc


/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        fullName:
 *         type: String
 *         required: true
 *         description: user's name       
 *        password:
 *         type: String
 *         required: true
 *         description: user's password
 *        email:
 *         type: string
 *         required: true
 *         unique: true
 *         description: User's email
 *        phone:
 *         type: String
 *         description: User's phone number
 *         default: null
 *        role:
 *         type: string
 *         description: User's role
 *         default: client
 *        shifts:
 *         type: Array
 *         description: User's reservations
 *        dni:
 *         type: String
 *         description: User's identification number
 *        idBranch:
 *         type: string
 *         description: If the user is an operator, in this place is the ID of the branch.
 *         default: null
 *        nameBranch:
 *         type: String
 *         default: null
 *         description: If the user is an operator, in this place is the NAME of the branch.
 *      example:
 *        fullName: Ignacio Lopez
 *        password: IgnacioLpz123
 *        email: ignalopez@gmail.com
 *        phone: +5428379483762
 *        dni: 43829484
 *        idBranch: null
 *        nameBranch: null
 *        shifts: []
 */

/** 
* @swagger
* /api/user/allUsers:
*  get:
*    summary: get all users
*    tags: [User]
*    responses:
*      200:
*       description: return all users
*      401:
*       description: Unauthorized
*/

//Mostrar en consola a todos los usuarios.
router.get("/allUsers", allUsers);


/** 
* @swagger
* /api/user/allOperators:
*  get:
*    summary: get all operators
*    tags: [User]
*    responses:
*      200:
*       description: all operators
*      401:
*       description: Unauthorized
*/

//Función para mostrar a todos los operadores.
router.get("/allOperators", allOperators); //router.get("/allOperators", validateAuth, validateAdmin, allOperators);

/**
* @swagger
* /api/user/usersByBranch/{id}:
*   get:
*     summary: "Get users with branch id"
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         description: "Branch id"
*         required: true
*         example: "1234"
*     responses:
*       200:
*         description: "Return users!"
*       401:
*         description: "Unauthorized"
*/


//Función para buscar operadores mediante su idBranch.
router.get("/usersByBranch/:id", usersByBranch); //router.get("/usersByBranch/:id", validateAuth, validateAdmin, usersByBranch);

/** 
* @swagger
* /api/user/me:
*  get:
*    summary: get logged user info
*    tags: [User]
*    responses:
*      200:
*       description: Info.
*      401:
*       description: Unauthorized
*/

//Recibir perfil de usuario logeado
router.get("/me", loggedUser); //router.get("/me", validateAuth, loggedUser);

/**
 * @swagger
 * /api/user/register:
 *  post:
 *   summary: Create a new user. The first letter must be a capital letter and must contain a number.
 *   tags: [User]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *   responses:
 *     200:
 *       description: new user created!
 *     400:
 *       description: error
 */

//Registrar usuario
router.post("/register", registerUser);

/**
 * @swagger
 * /api/user/createOperator:
 *  post:
 *   summary: create operator
 *   tags: [User]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullName:
 *               type: string
 *               description: operator name.
 *              email: 
 *               type: string
 *               description: user's email
 *              password: 
 *               type: string
 *               description: user's password
 *              role:
 *               type: string
 *               description: operator role
 *              nameBranch:
 *               type: string
 *               description: branch name
 *              idBranch:
 *               type: string
 *               description: branch id
 *              dni:
 *               type: string
 *               description: operator DNI.
 *          example:
 *             fullName: Ruben Cordoba
 *             password: RbnCordoba123
 *             email: rubencordoba@gmail.com
 *             dni: 22938475
 *             idBranch: null
 *             nameBranch: null
 *             shifts: []
 *             role: operator
 *   responses:
 *     200:
 *       description: created!
 *     500:
 *       description: error
 */

//Crear operador
router.post("/createOperator", createOperator);

/**
 * @swagger
 * /api/user/login:
 *  post:
 *   summary: login a user
 *   tags: [User]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email: 
 *               type: string
 *               description: user's email
 *              password: 
 *               type: string
 *               description: user's password
 *          example:
 *               email: ignalopez@gmail.com
 *               password: IgnacioLpz123
 *   responses:
 *     200:
 *       description: user logged!
 *     500:
 *       description: error
 */

//Logearse
router.post("/login", loginUser);

/**
 * @swagger
 * /api/user/logout:
 *  post:
 *   summary: logout
 *   tags: [User]
 *   responses:
 *     200:
 *       description: Logout successfully!
 *     500:
 *       description: error
 */

//Logout
router.post("/logout", logout); //router.post("/logout", validateAuth, logout);

/**
 * @swagger
 * /api/user/updateUser:
 *  put:
 *   summary: login a user
 *   tags: [User]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              password: 
 *               type: string
 *               description: user's password
 *              phone:
 *               type: string
 *               description: user's phone
 *          example:
 *             password: RbnCordoba123456
 *             phone: 0119284857498
 *   responses:
 *     200:
 *       description: user logged!
 *     500:
 *       description: error
 */

//Actualizar usuario logeado
router.put("/updateUser", updateLogedUser); //router.put("/updateUser", validateAuth, updateLogedUser);

//Actualizar rol a administrador
router.put("/setAdmin/:id", changeAdmin); //router.put("/setAdmin/:id", validateAuth, changeAdmin);

//Actualizar a rol de Operador
router.put("/setOperator/:id", changeOperator); //router.put("/setOperator/:id", validateAuth, changeOperator);

/**
* @swagger
* /api/user/deleteUser/{id}:
*   delete:
*     summary: "Delete User by ID"
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         description: "User ID"
*         required: true
*         example: "1234"
*     responses:
*       200:
*         description: "Deleted!"
*       401:
*         description: "Unauthorized"
*/

//Borrar usuario
router.delete("/deleteUser/:id", deleteUser); //router.delete("/deleteUser/:id", validateAuth, validateAdmin, deleteUser);
module.exports = router;
