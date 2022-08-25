const { redisClient } = require("../../utils/database");
exports.HSET = (keyFieldVal) => {
  redisClient.hset(...keyFieldVal);
};

exports.EXPIREAT = (key, expireAt) => {
  redisClient.expireat(key, expireAt);
};

exports.HGET = (key, field) => {
  return new Promise((res, rej) => {
    redisClient.hget(key, field, function (err, value) {
      if (!err) res(value);
      else rej({ message: "Unauthorized: Please sign in to continue..." });
    });
  });
};

exports.HDEL = (key) => {
  redisClient.hdel(key);
};
