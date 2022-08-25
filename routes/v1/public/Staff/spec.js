const express = require("express");
const router = express.Router();

const { spec } = require("../../../../controllers/Staff");

router.post("/save_specialization", spec.create);
router.get("/get_specialization", spec.findAll);

module.exports = router;
