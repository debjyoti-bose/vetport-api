const express = require("express");
const router = express.Router();

const { app_stat } = require("../../../../controllers/Appointment");

router.post("/save_appointmentstatus", app_stat.create);
router.get("/get_appointmentstatus", app_stat.findAll);
router.get("/get_appointmentstatus_by_name", app_stat.filterByName);
router.put("/update_appointmentstatus", app_stat.update);
router.delete("/delete_appointmentstatus", app_stat.delete);

module.exports = router;
