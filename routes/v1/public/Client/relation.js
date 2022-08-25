const express = require("express");
const router = express.Router();

const { relation } = require("../../../../controllers/Client");

router.post("/save_relationship", relation.create);
router.get("/get_relationship", relation.findAll);

module.exports = router;
