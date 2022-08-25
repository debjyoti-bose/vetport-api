const express = require("express");
const router = express.Router();

const { exam_form } = require("../../../../controllers/Forms");

router.post("/save_examform", exam_form.create);
router.get("/get_examform/:species", exam_form.findBySpecies);
router.put("/update_examform/:id", exam_form.update);

module.exports = router;
