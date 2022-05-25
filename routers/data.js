const express = require("express")
var router = express.Router()

const Data = require("../controllers/data")

router.post("/postdata", Data.datapost)
router.post("/findata", Data.dataget)
router.post("/updatedata", Data.updatedata)


module.exports = router
