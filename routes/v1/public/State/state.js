const express = require("express");
const router = express.Router();

const { state } = require("../../../../controllers/State");

router.post("/save_state", state.create);
router.get("/get_state", state.findAll);
router.get("/get_stateByCountry/:countryId", state.findByCountry);

//router.put("/update", state.update);

module.exports = router;
