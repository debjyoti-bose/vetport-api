const jwt = require("jsonwebtoken");
const JWT_ACCESS_TOKEN_KEY = "vetflowToken";
const JWT_REFRESH_TOKEN_KEY = "vetflowapiRefreshToken";

exports.generateToken = (payload, expiresIn) => {
  const token = jwt.sign(payload, JWT_ACCESS_TOKEN_KEY, {
    expiresIn: expiresIn ?? 3600,
  }); //default expire in 1 hr
  return token;
};

exports.generateRefreshToken = (payload, expiresIn) => {
  const refreshToken = jwt.sign(payload, JWT_REFRESH_TOKEN_KEY, {
    expiresIn: expiresIn ?? "24h",
  });
  return refreshToken;
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_ACCESS_TOKEN_KEY);
};

exports.verifyRefreshToken = (refreshToken) => {
  return jwt.verify(refreshToken, JWT_REFRESH_TOKEN_KEY);
};
