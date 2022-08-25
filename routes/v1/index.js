const express = require("express");
const router = express.Router();
const jwtAuth = require("../../middlewares/jwtAuth");

// session authentication for public routes
router.get("/test", (req, res) => res.send("test working"));
router.use("/eventsource", require("./public/EventSource/evtSrc"));
router.use("/", require("./public/Client/clientReg"));
router.use("/", require("./public/Patient/patReg"));
router.use("/", require("./public/Staff/staff"));
router.use("/encounter", require("./public/Encounter/enct"));
router.use("/clinic", require("./public/Clinic/clinic"));
router.use("/mobilecliniclocation", require("./public/Clinic/mcLoc"));
router.use("/phonetype", require("./public/Phone/phoneType"));
router.use("/discount", require("./public/Payment/discount"));
router.use("/userGroup", require("./public/User/userGrp"));
router.use("/taskcategory", require("./public/Task/taskCat"));
router.use("/staffshift", require("./public/Staff/staffShift"));
router.use("/species", require("./public/Patient/species"));
router.use("/breed", require("./public/Patient/breed"));
router.use("/sex", require("./public/Patient/sex"));
router.use("/color", require("./public/Patient/color"));
router.use("/referredby", require("./public/Client/refer"));
router.use("/visitreason", require("./public/Appointment/visitRsn"));
router.use("/reservationtype", require("./public/Boarding/resrvType"));
router.use("/vendortype", require("./public/Vendor/vndrType"));
router.use("/manufacturer", require("./public/Vendor/mfr"));
router.use("/stockfacility", require("./public/StockManagement/stockFac"));
router.use("/vendor", require("./public/Vendor/vndr"));
router.use("/vendoritem", require("./public/Vendor/vndrItem"));
router.use("/stockbasket", require("./public/StockManagement/stockBskt"));
router.use("/relationship", require("./public/Client/relation"));
router.use("/state", require("./public/State/state"));
router.use("/country", require("./public/Country/cnt"));
router.use("/timezone", require("./public/TimeZone/timeZone"));
router.use("/title", require("./public/Client/title"));
router.use("/appointment", require("./public/Appointment/app"));
router.use("/staffDesignation", require("./public/Staff/staffDes"));
router.use("/specialization", require("./public/Staff/spec"));
router.use("/user", require("./public/User/user"));
router.use("/taginfo", require("./public/TagInfo/tagInfo"));
router.use("/appointmenttype", require("./public/Appointment/appType"));
router.use("/appointmentstatus", require("./public/Appointment/appStat"));
router.use("/followup", require("./public/Encounter/followUp"));
router.use("/plantype", require("./public/Plan/planType"));
router.use("/planAction", require("./public/Plan/planAct"));
router.use("/plancategory", require("./public/Plan/planCat"));
router.use("/plansubcategory", require("./public/Plan/planSubCat"));
router.use("/planitem", require("./public/Plan/planItem"));
router.use("/groupplanitem", require("./public/Plan/grpPlan"));
router.use("/reminder", require("./public/Reminder/remind"));
router.use("/packageType", require("./public/Vendor/pkgType"));
router.use("/contentType", require("./public/Vendor/cntType"));
router.use("/categoryTax", require("./public/Payment/catTax"));
router.use("/subCategoryTax", require("./public/Payment/subCatTax"));
router.use("/equipmentcategory", require("./public/Equipment/equipCat"));
router.use("/equipment", require("./public/Equipment/equip"));
router.use("/paymentGroup", require("./public/Payment/payGrp"));
router.use("/paymentType", require("./public/Payment/payType"));
router.use("/attachType", require("./public/Attachment/atchType"));
router.use(
  "/searchclientpatient",
  require("./public/SearchClientPatient/searchCP")
);
router.use("/historyform", require("./public/Forms/histForm"));
router.use("/examform", require("./public//Forms/examForm"));
router.use("/creditnote", require("./public/Payment/creditNote"));
router.use("/clientreport", require("./public/Reports/clientRpt"));

//jwt** authentication for protected routes for future implementation
//router.use(jwt@verify);
//router.use("/abc", require("./protected/abc.js"));
router.use("/protected", jwtAuth, (req, res) => {
  res.status(200).json("Please provide routes for protected pages");
});
module.exports = router;
