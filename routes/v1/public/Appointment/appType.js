const express = require("express");
const router = express.Router();

const { app_type } = require("../../../../controllers/Appointment");

router.post("/save_appointmenttype", app_type.create);
router.get("/get_appointmenttype", app_type.findAll);
router.get("/get_appointmenttype_by_type/:title", app_type.filterByTitle);
router.put("/update_appointmenttype/:id", app_type.update);
router.delete("/delete_appointmenttype/:id", app_type.delete);

// router.get("/get_appointmenttype_by_query", appointmenttype.findByQuery);
// router.patch(
//   "/update_default_appointmenttype",
//   appointmenttype.updateDefaultAppointmentType
// );

module.exports = router;
