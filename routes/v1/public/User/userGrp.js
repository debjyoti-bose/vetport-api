const express = require("express");
const router = express.Router();

const { user_grp } = require("../../../../controllers/User");

router.post("/save_userGroup", user_grp.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_userGroup", user_grp.findAll);
router.put("/update_userGroup/:id", user_grp.update);

module.exports = router;
