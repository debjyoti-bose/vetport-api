const express = require("express");
const router = express.Router();

const { staff_des } = require("../../../../controllers/Staff");

router.post("/save_staffDesignation", staff_des.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_staffDesignation", staff_des.findAll);
router.put("/update_staffDesignation/:id", staff_des.update);

module.exports = router;
