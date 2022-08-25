const client_reg_services = require("./clientReg");
const title_services = require("./title");
const refer_services = require("./refer");
const relation_services = require("./relation");

const client_services = {
  client_reg_services: client_reg_services,
  title_services: title_services,
  refer_services: refer_services,
  relation_services: relation_services,
};

module.exports = {
  ...client_services,
};
