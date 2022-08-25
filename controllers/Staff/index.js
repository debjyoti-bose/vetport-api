const staff_ctnlr = {
  spec: require("./spec"),
  staff: require("./staff"),
  staff_des: require("./staffDes"),
  staff_shift: require("./staffShift"),
};

module.exports = {
  ...staff_ctnlr,
};
