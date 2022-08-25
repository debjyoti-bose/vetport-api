const express = require("express");
const router = express.Router();

const { mfr } = require("../../../../controllers/Vendor");

router.post("/save_manufacturer", mfr.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_manufacturer", mfr.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_manufacturerByName/:name?", mfr.findByName);
router.put("/update_manufacturer/:id", mfr.update);

module.exports = router;
