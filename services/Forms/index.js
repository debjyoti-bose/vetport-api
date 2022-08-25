const hist_form_services = require("./histForm");
const exam_form_services = require("./examForm");

const services = {
  hist_form_services: hist_form_services,
  exam_form_services: exam_form_services,
};

module.exports = {
  ...services,
};
