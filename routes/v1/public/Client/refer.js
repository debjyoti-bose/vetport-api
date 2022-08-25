const express = require("express");
const router = express.Router();

const { refer } = require("../../../../controllers/Client");

router.post("/save_referredby", refer.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_referredby", refer.findAll);
router.put("/update_referredby/:id", refer.update);

module.exports = router;
