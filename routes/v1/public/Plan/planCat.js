const express = require("express");
const router = express.Router();

const { pln_cat } = require("../../../../controllers/Plan");

router.post("/save_plancategory", pln_cat.create);
router.get("/get_plancategory", pln_cat.findAll);
router.get("/get_plancategoryById", pln_cat.findOne);
router.put("/update_plancategory/:id", pln_cat.update);
module.exports = router;
