const express = require("express");
const router = express.Router();

const { follow_up } = require("../../../../controllers/Encounter");

router.post("/save_followup", follow_up.create);
// router.get("/get_followup", follow_up.findAll);
router.put("/update_followup/:id", follow_up.update);
router.use("/delete_followup/:id", follow_up.delete);

module.exports = router;
