const express = require("express");
const router = express.Router();
const User = require("./user");
const Branch = require("./branch");
const Shift = require("./shift");

router.use("/user", User);
router.use("/branch", Branch);
router.use("/shift", Shift);

module.exports = router;
