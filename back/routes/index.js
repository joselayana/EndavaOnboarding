const express = require('express');
const router = express.Router();

const users = require("./user")
const tasks = require("./task")
const disciplines = require("./discipline")

router.use("/api/user", users)
router.use("/api/task", tasks)
router.use("/api/discipline", disciplines)


module.exports = router