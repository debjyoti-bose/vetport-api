const express = require("express");
const router = express.Router();

const { cnt_type } = require("../../../../controllers/Vendor");

router.post("/save_contentType", cnt_type.create);
router.get("/get_contentType", cnt_type.findAll);
router.put("/update_contentType/:id", cnt_type.update);
router.get("/get_contentTypeByName/:name?", cnt_type.findByName);

module.exports = router;
