const express = require("express");
const router = express.Router();

const { vndr_item } = require("../../../../controllers/Vendor");

router.post("/save_vendorItem", vndr_item.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_vendorItem", vndr_item.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_vendorItemByName/:name?", vndr_item.findByName);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/filter_vendorItemByQuery", vndr_item.filterByQuery);
router.put("/update_vendorItem/:id", vndr_item.update);

module.exports = router;
