const redis = require("redis");
const { redisCFG } = require("../../config");
const redisClient = redis.createClient({
  host: redisCFG.host,
  port: redisCFG.port,
});

module.exports = redisClient;
