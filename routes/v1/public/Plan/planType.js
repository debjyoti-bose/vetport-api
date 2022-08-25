const express = require("express");
const router = express.Router();

const { pln_type } = require("../../../../controllers/Plan");

router.post("/save_plantype", pln_type.create);
router.get("/get_plantype", pln_type.findAll);

module.exports = router;
