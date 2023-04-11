const express = require("express");
const router = express.Router();

const {
  validateAuth,
  validateAdmin,
  validateOperator,
} = require("../middleware/auth");

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
  noAssistShifts,
  assistShifts,
  cancelledShifts,
  pendingShifts,
} = require("../controllers/shifts.js");

/**
 * @swagger
 * components:
 *   schemas:
 *     Shift:
 *       type: object
 *       properties:
 *         idBranch:
 *           type: string
 *           description: The ID of the branch associated with the shift.
 *         idUser:
 *           type: string
 *           description: The ID of the user associated with the shift.
 *         infoUser:
 *           type: object
 *           default: none
 *           description: Additional information about the user.
 *         dateBooking:
 *           type: string
 *           description: The date on which the shift was booked.
 *         dateShift:
 *           type: string
 *           description: The date on which the shift will occur.
 *         statusHour:
 *           type: string
 *           description: The status of the shift's hours (e.g. "full", "partial", "unavailable").
 *         statusShift:
 *           type: string
 *           default: pending
 *           description: The status of the shift (e.g. "pending", "approved", "denied").
 *         updatedAt:
 *           type: string
 *           default: No updated!
 *           description: The date on which the shift was last updated.
 */


/**
* @swagger
* /api/shift/onBranch/{id}:
*   get:
*     summary: "Get shifts by branch id"
*     tags: [Shift]
*     parameters:
*       - in: path
*         name: id
*         description: "Branch id"
*         required: true
*         example: "1234"
*     responses:
*       200:
*         description: "Return shifts."
*       401:
*         description: "Unauthorized"
*/

//Trae turnos de una sucursal en especial.
router.get("/onBranch/:id", shiftsOnBranch);


/**
 * @swagger
 * /api/shift/shiftsByUserId:
 *  get:
 *   summary: get shifts by user id
 *   tags: [Shift]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              idUser: 
 *               type: string
 *               description: user's id
 *          example:
 *             idUser: 1234
 *   responses:
 *     200:
 *       description: Return shifts
 *     500:
 *       description: error
 */

//Trae turnos de un usuario.
router.get("/shiftsByUserId", shiftsByUserId);

/** 
* @swagger
* /api/shift/allShifts:
*  get:
*    summary: get all shifts
*    tags: [Shift]
*    responses:
*      200:
*       description: return all shifts
*      401:
*       description: Unauthorized
*/

//Trae todos los turnos.
router.get("/allShifts", allShifts);

/**
 * @swagger
 * /api/shift/catchShift:
 *  get:
 *   summary: get shifts by id
 *   tags: [Shift]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              idShift: 
 *               type: string
 *               description: shift id
 *          example:
 *             idShift: 1234
 *   responses:
 *     200:
 *       description: Return shift
 *     500:
 *       description: error
 */

//Trae turnos por su ID.
router.get("/catchShift", shiftById);

/**
* @swagger
* /api/shift/create/{id}:
*   post:
*     summary: "Create Shift"
*     tags: [Shift]
*     parameters:
*       - in: path
*         name: id
*         description: "Branch id"
*         required: true
*         example: "1234"
*     requestBody:
*       required: true
*       content:
*          application/json:
*            schema:
*              type: object
*              properties:
*               idUser:
*                type: string
*               dateBooking:
*                type: string
*               email:
*                type: string
*               phone:
*                type: string
*               fullName:
*                type: string
*               dateShift:
*                type: string
*               hour:
*                type: string
*            example:
*               idUser: elUserId
*               dateBooking: Fri Mar 17 2023 00:00:00 GMT-0300 (hora estándar de Argentina)
*               email: adfksfgk@asdf.dsf
*               phone: 24235445
*               fullName: Lucas De Lellis
*               dateShift: Wed Mar 15 2023 10:34:24 GMT-0300 (hora estándar de Argentina)
*               hour: 10:30
*     responses:
*       200:
*         description: "Created!"
*       401:
*         description: "Unauthorized"
*/

//Ruta para crear turnos
router.post("/create/:id", createShifts);

/**
 * @swagger
 * /api/shift/assist:
 *  put:
 *   summary: put user assisted to the shift reserved
 *   tags: [Shift]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              idShift: 
 *               type: string
 *               description: shift id
 *          example:
 *             idShift: 1234
 *   responses:
 *     200:
 *       description: Assist!
 *     500:
 *       description: error
 */

//Marcar un turno como asistido.
router.put("/assist", assist);

/**
 * @swagger
 * /api/shift/noassist:
 *  put:
 *   summary: put user no assisted to the shift reserved
 *   tags: [Shift]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              idShift: 
 *               type: string
 *               description: shift id
 *          example:
 *             idShift: 1234
 *   responses:
 *     200:
 *       description: No Assist!
 *     500:
 *       description: error
 */

//Marcar un turno como NO asistido.
router.put("/noassist", noAssist);

/**
 * @swagger
 * /api/shift/cancelShift:
 *  put:
 *   summary: cancel shift
 *   tags: [Shift]
 *   requestBody:
 *     required: true
 *     content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              idShift: 
 *               type: string
 *               description: shift id
 *          example:
 *             idShift: 1234
 *   responses:
 *     200:
 *       description: Cancelled!
 *     500:
 *       description: error
 */

//Cancelar un turno.
router.put("/cancelShift", cancelShift);

//Actualizar un turno.
router.put("/updateShift", updateShift);

//DANGER ZONE
router.delete("/deleteAll", deleteShifts);

//ADICIONALES
router.get("/noAssistShifts", noAssistShifts);
router.get("/assistShifts", assistShifts);
router.get("/cancelledShifts", cancelledShifts);
router.get("/pendingShifts", pendingShifts);

module.exports = router;
