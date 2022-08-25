const express = require("express");
const router = express.Router();

const { color } = require("../../../../controllers/Patient");

router.post("/save_color", color.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_color", color.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_color_bySpeciesId/:id", color.getColorBySpeciesId);
router.put("/update_color/:id", color.update);
router.patch("/map_color/:id", color.mapColor);
router.delete("/delete_color/:id", color.delete);

module.exports = router;
