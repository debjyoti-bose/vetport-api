const session = require("express-session");
const { server, db } = require("../config");
const { environment } = server;
const MongoStore = require("connect-mongo");

module.exports = session({
  store: MongoStore.create({
    mongoUrl: db.CONNECTION_STRING,
    autoRemove: "interval",
    autoRemoveInterval: 10, // In minutes. Default
  }),
  secret: "mysecret",
  saveUninitialized: false,
  rolling: true, // timeout is extended if user continues to use the website else he/she will be logged out
  resave: false,
  name: "_sid",
  cookie: {
    secure: environment === "PRODUCTION", //if true only transmit cookie over https - production
    httpOnly: true, //if true: prevents client side JS from reading the cookie
    maxAge: 1000 * 60 * 30, //session maxage in milliseconds --30mins is given
    sameSite: "Lax",
  },
});
