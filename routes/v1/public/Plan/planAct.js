const express = require("express");
const router = express.Router();

const { pln_act } = require("../../../../controllers/Plan");

router.post("/save_planaction", pln_act.create);
router.get("/get_planaction", pln_act.findAll);

module.exports = router;
