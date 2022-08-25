const app_services = require("./app");
const app_stat_services = require("./appStat");
const app_type_services = require("./appType");
const visit_services = require("./visitRsn");

const appoint_services = {
  app_services: app_services,
  app_stat_services: app_stat_services,
  app_type_services: app_type_services,
  visit_services: visit_services,
};

module.exports = {
  ...appoint_services,
};
