const user_services = require("./user");
const user_grp_services = require("./userGrp");

const services = {
  user_services: user_services,
  user_grp_services: user_grp_services,
};

module.exports = {
  ...services,
};
