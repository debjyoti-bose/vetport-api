const express = require("express");
const router = express.Router();

const { equip_cat } = require("../../../../controllers/Equipment");

router.post("/save_equipmentcategory", equip_cat.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_equipmentcategory", equip_cat.find);
router.put("/update_equipmentcategory/:id", equip_cat.update);

module.exports = router;
