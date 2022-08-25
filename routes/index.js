const express = require("express");
const router = express.Router();
const { auth } = require("../controllers/Authentication");
const sessauth = require("../middlewares/authenticate");
const { event } = require("../controllers/Events");
const { _gb } = require("../utils/helper/Global");
const { clients } = _gb;
const gzip = require("../middlewares/compression");
const passport = require("../middlewares/passport");

router.post("/login", passport.authenticate("local"), auth.login);
router.get("/logout", auth.logout);
router.get("/cpass", auth.changePass);
router.get("/notification", event.notify);
router.get("/diff", function (req, res) {
  console.log("~ line 61 ~ contacts", clients.keys());
  for (let values of clients.values()) {
    values.response.write(`data: ${JSON.stringify({ num: 22 })}\n\n`);
  }
  res.send("event sent");
});
// router.get("/userevent", event.userevent);

router.use(sessauth);
router.use(gzip);
router.use("/api/v1", require("./v1/index"));

module.exports = router;
