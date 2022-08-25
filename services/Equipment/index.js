const equip_services = require("./equip");
const equip_cat_services = require("./equipCat");

const services = {
  equip_services: equip_services,
  equip_cat_services: equip_cat_services,
};
module.exports = {
  ...services,
};
