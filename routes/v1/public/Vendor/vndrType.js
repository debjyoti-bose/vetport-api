const express = require("express");
const router = express.Router();

const { vndr_type } = require("../../../../controllers/Vendor");

router.post("/save_vendorType", vndr_type.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_vendorType", vndr_type.findAll);
router.put("/update_vendorType", vndr_type.update);

module.exports = router;
