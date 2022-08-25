const express = require("express");
const router = express.Router();

const { staff_shift } = require("../../../../controllers/Staff");

router.post("/save_staffshift", staff_shift.create);
router.get("/get_staffshift", staff_shift.findAll);
router.put("/update_staffshift/:id", staff_shift.update);

module.exports = router;
