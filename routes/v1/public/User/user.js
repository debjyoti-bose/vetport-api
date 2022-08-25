const express = require("express");
const router = express.Router();

const { user } = require("../../../../controllers/User");

router.post("/save_user", user.create);
router.get("/get_user", user.findAll);
router.put("/update_user/:id", user.update);
router.get("/verify_userId/:userId", user.getUserId);
// router.patch("/update_password/:id", user.updatePassword);

module.exports = router;
