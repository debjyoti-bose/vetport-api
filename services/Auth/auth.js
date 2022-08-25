const USER = require("../../models/User");
const bcrypt = require("bcrypt");
exports.login = async (username, password) => {
  try {
    const users = await USER.findOne({
      userId: username,
    }).lean();
    const match = await bcrypt.compare(password, users.password);
    if (match) {
      return {
        id: users.uid,
        password: users.password,
        roles: users.role,
        uid: Buffer.from(users.uid).toString("base64"),
      };
    } else {
      return Promise.reject("wrong username or password");
    }
  } catch (err) {
    return Promise.reject("Invalid authentication");
  }
};
