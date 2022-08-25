const session = require("express-session");
const connectRedis = require("connect-redis");
const { redisClient } = require("../utils/database");
const RedisStore = connectRedis(session);
const { server } = require("../config");
const { environment } = server;

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  secret: "mysecret",
  saveUninitialized: false,
  rolling: true, // timeout is extended if user continues to use the website else he/she will be logged out
  resave: false,
  name: "_sid",
  cookie: {
    secure: environment === 'PRODUCTION', //if true only transmit cookie over https - production
    httpOnly: true, //if true: prevents client side JS from reading the cookie
    maxAge: 1000 * 60 * 30, //session maxage in milliseconds --30mins is given
    sameSite : 'Lax'
  },
});
