const express = require("express");
const router = express.Router();

const { atch_type } = require("../../../../controllers/Attachment");

router.post("/save_attachType", atch_type.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_attachType", atch_type.findAll);
router.put("/update_attachType/:id", atch_type.update);

module.exports = router;
