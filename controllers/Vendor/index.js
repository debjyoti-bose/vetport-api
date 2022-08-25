const vndr_cntlr = {
  cnt_type: require("./cntType"),
  mfr: require("./mfr"),
  pkg_type: require("./pkgType"),
  vndr: require("./vndr"),
  vndr_item: require("./vndrItem"),
  vndr_type: require("./vndrType"),
};

module.exports = {
  ...vndr_cntlr,
};
