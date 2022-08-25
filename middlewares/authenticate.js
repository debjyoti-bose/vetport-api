const { redis_services } = require("../services");
const authenticate = async (req, res, next) => {
  try {
    if (!req.session.uid) throw new Error("Please login to continue");
    let user_status = await redis_services.HGET(req.session.uid, "status");
    user_status = user_status === "active";
    if (!req.session || !req.session.uid || !user_status) {
      throw new Error("Please login to continue");
    }
    next();
  } catch (err) {
    req?.session?.destroy(function (error) {
      //Inside a callback… you can write you cleanup functions
      Object.keys(req.cookies).map((_c) => res.clearCookie(_c));
      res.status(401).json(err.message);
    }) ?? res.status(401).json(err.message);
  }
};

module.exports = authenticate;
