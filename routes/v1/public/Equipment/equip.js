const express = require("express");
const router = express.Router();

const { equip } = require("../../../../controllers/Equipment");

router.post("/save_equipment", equip.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_equipment", equip.find);
router.put("/update_equipment/:id", equip.update);

module.exports = router;
