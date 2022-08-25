const { jwt_services } = require("../services");

const verifyAuth = (req, res, next) => {
  try {
    var { _t, _rt } = req.cookies;
    if (!_t || !_rt) {
      req.session.destroy();
      Object.keys(req.cookies).map((_c) => res.clearCookie(_c));
      throw new Error("Invalid request");
    }
    const decoded = jwt_services.verifyToken(_t);
    res.cookie("_t", _t, {
      maxAge: 30 * 60 * 1000, //30mins
      httpOnly: true,
    }); // increasing the cookie expiry timer if the user keep using the protected routes
    next();
  } catch (err) {
    // catching error for token
    if (err.message == "jwt expired") {
      try {
        const refTokenDecoded = jwt_services.verifyRefreshToken(_rt);
        const generateNewToken = jwt_services.generateToken(
          {
            _id: refTokenDecoded._id,
            _p: refTokenDecoded._p,
          },
          "15m"
        );
        res.cookie("_t", generateNewToken, {
          maxAge: 30 * 60 * 1000, //session maxage in milliseconds --30mins is given
          httpOnly: true,
        });
        next();
      } catch (err) {
        // catching error for refresh token
        if (err.message == "jwt expired") {
          res.clearCookie("_rt", "_t"); //clearing refreshToken and token
          res.status(401).json("please login again to access this page");
        } else res.status(401).json("please login again to access this page");
      }
    } else {
      res.clearCookie("_rt", "_t");
      res.status(401).json(err.message);
    }
  }
};

module.exports = verifyAuth;
