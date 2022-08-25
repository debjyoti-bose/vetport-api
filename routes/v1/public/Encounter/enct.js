const express = require("express");
const router = express.Router();

const { enct } = require("../../../../controllers/Encounter");

router.post("/save_encounter", enct.create);
router.get("/get_encounter", enct.findAll);
router.patch("/update", enct.update);
router.use("/delete", enct.delete);

module.exports = router;
