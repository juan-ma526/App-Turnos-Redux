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



/**
 * @swagger
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - name
 *         - capMax
 *         - idBranch
 *         - shifts
 *         - idOperator
 *         - beginTime
 *         - closeTime
 *         - email
 *         - phone
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the branch
 *         capMax:
 *           type: integer
 *           description: Maximum capacity of the branch
 *         idBranch:
 *           type: integer
 *           description: ID of the branch
 *         shifts:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of shifts of the branch
 *         idOperator:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of operators of the branch
 *         beginTime:
 *           type: string
 *           description: Opening time of the branch
 *         closeTime:
 *           type: string
 *           description: Closing time of the branch
 *         email:
 *           type: string
 *           format: email
 *           description: Email of the branch
 *         phone:
 *           type: string
 *           description: Phone number of the branch
 *       example:
 *         name: "Swagger Test"
 *         capMax: 50
 *         idBranch: 123
 *         shifts: []
 *         idOperator: []
 *         beginTime: "9:00am"
 *         closeTime: "5:00pm"
 *         email: "mybranch@example.com"
 *         phone: "1234567890"
 */


/** 
* @swagger
* /api/branch/allBranchs:
*  get:
*    summary: get all branchs
*    tags: [Branch]
*    responses:
*      200:
*       description: return all branchs
*      401:
*       description: Unauthorized
*/

//Trae todas las sucursales.
router.get("/allBranchs", allBranchs); //router.get("/allBranchs", validateAuth, validateAdmin, allBranchs)

/**
* @swagger
* /api/branch/branchById/{id}:
*   get:
*     summary: "Return branch by id"
*     tags: [Branch]
*     parameters:
*       - in: path
*         name: id
*         description: "ID of the branch"
*         required: true
*         example: "1234"
*     responses:
*       200:
*         description: "Return branch by id"
*       401:
*         description: "Unauthorized"
*/

//Trae una sucursal por su ID.
router.get("/branchById/:id", branchById); //router.get("/branchById/:id", validateAuth, validateAdmin, branchById);


/**
* @swagger
* /api/branch/operators/{id}:
*   get:
*     summary: "Return operators id with branch id"
*     tags: [Branch]
*     parameters:
*       - in: path
*         name: id
*         description: "Operators id"
*         required: true
*         example: "1234"
*     responses:
*       200:
*         description: "Return branch by id"
*       401:
*         description: "Unauthorized"
*/

//Muestra los ID de los operadores.
router.get("/operators/:id", allOperatorsInBranch); //router.get("/operators/:id", validateAuth, validateAdmin, allOperatorsInBranch);

/**
 * @swagger
 * /api/branch/createBranch:
 *  post:
 *   summary: Create a new branch.
 *   tags: [Branch]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Branch'
 *   responses:
 *     200:
 *       description: Branch created!
 *     400:
 *       description: error
 */

//Crea una sucursal.
router.post("/createBranch", createBranch); // router.post("/createBranch", validateAuth, validateAdmin, createBranch)

//DANGER ZONE. Borra una sucursal.
router.delete("/delete", deleteBranch); //router.delete("/delete", validateAuth, validateAdmin, deleteBranch);

/**
* @swagger
* /api/branch/deleteShifts/{id}:
*   post:
*     summary: "Delete all shifts with branch id"
*     tags: [Branch]
*     parameters:
*       - in: path
*         name: id
*         description: "Branch id"
*         required: true
*         example: "1234"
*     responses:
*       200:
*         description: "Shifts deleted!"
*       401:
*         description: "Unauthorized"
*/

//Borra TODOS los turnos adjuntados en la DB de la sucursal por su ID.
router.post("/deleteShifts/:id", deleteShifts);

/**
 * @swagger
 * /api/branch/updateBranch/{id}:
 *  put:
 *   summary: update branch info
 *   tags: [Branch]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email: 
 *               type: string
 *               description: branch email
 *              name: 
 *               type: string
 *               description: branch name
 *              capMax:
 *               type: number
 *               description: max cap. of the branch
 *          example:
 *               email: sucursal@cordoba.com
 *               name: Sucursal Cordoba
 *               capMax: 50
 *   responses:
 *     200:
 *       description: Updated!
 *     500:
 *       description: error
 */


//Actualiza una sucursal.
router.put("/updateBranch/:id", updateBranch); //router.put("/updateBranch/:id", validateAuth, validateAdmin, updateBranch);



module.exports = router;
