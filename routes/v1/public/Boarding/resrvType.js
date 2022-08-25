const express = require("express");
const router = express.Router();

const { resrv_type } = require("../../../../controllers/Boarding");

router.post("/add", resrv_type.create);
router.get("/get", resrv_type.findAll);
router.put("/update", resrv_type.update);

module.exports = router;
