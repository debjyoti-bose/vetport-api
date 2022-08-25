const enct_services = require("./enct");
const follow_up_services = require("./followUp");

const services = {
  enct_services: enct_services,
  follow_up_services: follow_up_services,
};
module.exports = {
  ...services,
};
