// **This page will replaced by
const { auth_services, jwt_services } = require("../../services");
const { server } = require("../../config");
const { environment } = server;
const mongoose = require("mongoose");

exports.login = async (req, res) => {
  try {
    const { id, password } = req.session.passport.user;
    const sessid = req.sessionID;
    // sending user with signed token and refresh token
    const jwtBody = {
      _id: id,
      _p: password,
    };
    const token = jwt_services.generateToken(jwtBody, "15m");
    const refToken = jwt_services.generateRefreshToken(jwtBody, "24h");
    res.cookie("_oid", sessid, {
      maxAge: 30 * 60 * 1000,
      httpOnly: true,
      sameSite: "Lax",
      secure: environment === "PRODUCTION",
    }); // 30mins expiry
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
    const id = req.session.passport.user.id;
    //const sessid = req.sessionID;
    const store = req.sessionStore;
    const db = mongoose.connection.db;
    db.collection("sessions")
      .find({})
      .toArray((err, result) => {
        const data = result;
        const parse = data.map((v) => ({
          _id: v._id,
          expires: v.expires,
          session: JSON.parse(v.session),
        }));
        parse.forEach((results) => {
          const { _id } = results;
          const { user } = results.session.passport;
          if (user.id == id) {
            store.destroy(_id, function (err) {
              if (err) throw new Error("session not deleted");
            });
          }
        });
      });

    res.status(200).json("cp successfully");
  } catch (err) {
    res.status(400);
  }
};
