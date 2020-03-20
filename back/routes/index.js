const express = require('express');
const router = express.Router();
const recruits = require("./recruit")
const users = require("./user")

router.use("/api/user", users)
router.use("/api/recruit", recruits)


module.exports = router