const env = process.env.NODE_ENV || "LOCAL";
const LOCAL = {
  server: {
    environment: "LOCAL",
    PORT: process.env.PORT,
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  redisCFG: {
    host: "localhost",
    port: 6379,
  },
};

const STAGING = {
  server: {
    environment: "STAGING",
    PORT: process.env.PORT,
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  redisCFG: {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
  },
};
const PRODUCTION = {
  server: {
    environment: "PRODUCTION",
    PORT: process.env.PORT,
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  redisCFG: {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
  },
};

const config = {
  LOCAL,
  STAGING,
  PRODUCTION,
};

module.exports = config[env];
