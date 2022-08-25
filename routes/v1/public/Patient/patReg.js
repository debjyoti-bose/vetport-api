const express = require("express");
const router = express.Router();

const { pat_reg } = require("../../../../controllers/Patient");

router.post("/save_patient", pat_reg.create);
router.get("/get_patient", pat_reg.findAll);
router.get("/get_patientById/:id", pat_reg.findOne);
router.put("/update_patient/:id", pat_reg.update);
router.get("/verify_patientname/:name", pat_reg.verifyPatientName);

module.exports = router;
