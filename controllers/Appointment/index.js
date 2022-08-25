const appt_cntlr = {
  app: require("./app"),
  app_stat: require("./appStat"),
  app_type: require("./appType"),
  visit_rsn: require("./visitRsn"),
};

module.exports = {
  ...appt_cntlr,
};
