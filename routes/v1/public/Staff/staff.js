const express = require("express");
const router = express.Router();

const { staff } = require("../../../../controllers/Staff");

router.post("/save_staff", staff.create);
router.get("/get_staff", staff.findAll);
router.get("/get_staffById/:id", staff.findById);
router.get(
  "/get_staffByClinic/:clinic/:status/:isProvider?",
  staff.filterByClinic
);
router.get("/get_preferredProvider", staff.filterProviderByName);
router.put("/update_staff/:id", staff.update);

// router.get("/get_referralProvider/:clinicId", staff.filterReferralProvider);

// router.post("/", staff.create);
// router.get("/preferredprovider", staff.filterProviderByName);
// router.get("/referralprovider/:clinicId", staff.filterReferralProvider);
// router.get("/:id?", staff.find);
// router.put("/:id", staff.update);

module.exports = router;
