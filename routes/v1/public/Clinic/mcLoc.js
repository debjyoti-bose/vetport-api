const express = require("express");
const router = express.Router();

const { mc_loc } = require("../../../../controllers/Clinic");

router.post("/add", mc_loc.create);
// pass fields limit and page as query for pagination (default limit=10, page=1)
router.get("/get", mc_loc.findAll);
router.put("/update/:id", mc_loc.update);
// router.get("/get_by_loaction", mclocation.getByLocation);

module.exports = router;
