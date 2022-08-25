const express = require("express");
const router = express.Router();

const { visit_rsn } = require("../../../../controllers/Appointment");

router.post("/save_visitReason", visit_rsn.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_visitReason", visit_rsn.findAll);
router.put("/update_visitReason/:id", visit_rsn.update);

module.exports = router;
