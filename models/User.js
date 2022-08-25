const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Staff = require("./Staff");
const UserGroup = require("./UserGroup");

const user = new Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    userGroup: {
      type: Schema.Types.ObjectId,
      ref: UserGroup.modelName,
    },
    homePage: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    staff: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", user);
module.exports = UserModel;
