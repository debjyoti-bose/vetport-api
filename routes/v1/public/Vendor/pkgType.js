const express = require("express");
const router = express.Router();

const { pkg_type } = require("../../../../controllers/Vendor");

router.post("/save_packageType", pkg_type.create);
router.get("/get_packageType", pkg_type.findAll);
router.put("/update_packageType/:id", pkg_type.update);
router.get("/get_packageTypeByName/:name?", pkg_type.findByName);
//router.get("/searchvendor", vendor.findAll)

module.exports = router;
