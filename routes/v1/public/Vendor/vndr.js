const express = require("express");
const router = express.Router();

const { vndr } = require("../../../../controllers/Vendor");

router.post("/save_vendor", vndr.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_vendor", vndr.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_vendorByName/:name?", vndr.findByName);
router.put("/update_vendor/:id", vndr.update);
// router.get("/get_vendorByStatus/:status", vendor.findByStatus);

module.exports = router;
