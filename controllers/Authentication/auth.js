// **This page will replaced by
const {
  auth_services,
  jwt_services,
  redis_services,
} = require("../../services");

const { server } = require("../../config");
const { environment } = server;

exports.login = async (req, res) => {
  const { username, password } = req.body;
  // in prod always use a validation library like joi
  //perform password valdiation
  if (!username || !password) {
    return res
      .status(400)
      .json(
        "Bad request params - you need to provide an username and a password"
      );
  }
  try {
    const user = await auth_services.login(username, password);
    req.session.uid = user.uid;
    redis_services.HSET([user.uid, "status", "active"]);
    redis_services.EXPIREAT(user.uid, parseInt(+new Date() / 1000) + 86400); // expire at 24 hrs later
    // sending user with signed token and refresh token
    const jwtBody = {
      _id: user.uid,
      _p: user.password,
    };
    const token = jwt_services.generateToken(jwtBody, "15m");
    const refToken = jwt_services.generateRefreshToken(jwtBody, "24h");
    res.cookie("_t", token, {
      maxAge: 30 * 60 * 1000,
      httpOnly: true,
      sameSite: "Lax",
      secure: environment === "PRODUCTION",
    }); // 30mins expiry
    res.cookie("_rt", refToken, {
      maxAge: 24 * 60 * 60 * 1000, //refresh token valid for 24hr in browser
      httpOnly: true,
      sameSite: "Lax",
      secure: environment === "PRODUCTION",
    });
    res.status(200).json("Welcome to vetport");
  } catch (err) {
    // in prod, do not use console.log or console.error as it will synchronous and it will block main thread
    res.status(401).json(err);
  }
};

exports.logout = async (req, res) => {
  try {
    // redis_services.HSET(["qwerty12345", "status", "inactive"]);
    req.session.destroy(function (err) {
      //Inside a callback… you can write you cleanup functions
      Object.keys(req.cookies).map((_c) => res.clearCookie(_c));
      res.status(200).json("Logged out successfully");
    });
  } catch (err) {
    res.status(400);
  }
};

exports.changePass = async (req, res) => {
  try {
    redis_services.HSET([req.session.uid, "status", "inactive"]);
    req.session.destroy(function (err) {
      //Inside a callback… you can write you cleanup functions
      Object.keys(req.cookies).map((_c) => res.clearCookie(_c));
      res.status(200).json("Password changed successfully");
    });
  } catch (err) {
    res.status(400);
  }
};
