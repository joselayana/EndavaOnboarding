const express = require('express');
const router = express.Router();

const users = require("./user")

router.use("/api/user", users)


module.exports = router