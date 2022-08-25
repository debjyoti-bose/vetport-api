const express = require("express");
const router = express.Router();

const { task_cat } = require("../../../../controllers/Task");

router.post("/add", task_cat.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get", task_cat.findAll);
router.put("/update", task_cat.update);

module.exports = router;
