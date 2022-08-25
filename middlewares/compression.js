const compression = require("compression");
module.exports = compression({
  threshold: 500 * 1000, // any data which is below 500kb won't be compressed
  filter: (req, res) => {
    if (req.headers["x-no-compression"]) {
      return false;
    }
    return compression.filter(req, res);
  },
});
