const express = require("express");
const router = express.Router();

const { clinic } = require("../../../../controllers/Clinic");

router.post("/save_clinic", clinic.create);
router.get("/get_clinic", clinic.findAll);
router.get("/get_clinicById/:id", clinic.findOne);
router.put("/update_clinicById/:id.", clinic.update);
router.get(
  "/get_clinicByTypeAndStatus/:status/:referral/:clinictype?",
  clinic.findByTypeAndStatus
);
router.get("/get_defaultClinic", clinic.getDefaultClinic);
router.get("/get_clinicName", clinic.filterByClinicName);

// router.get("/get_refferalClinic", clinic.getRefferalClinic);

module.exports = router;
