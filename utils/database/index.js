const connectMongo = require("./connectMongo");
const redisClient = require("./redisClient");

module.exports = {
  connectMongo: connectMongo,
  redisClient: redisClient,
};
