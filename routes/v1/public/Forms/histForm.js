const express = require("express");
const router = express.Router();

const { hist_form } = require("../../../../controllers/Forms");

router.post("/save_historyform", hist_form.create);
router.get("/get_historyform/:id", hist_form.findBySpecies);
router.put("/update_historyform/:id", hist_form.update);

module.exports = router;
