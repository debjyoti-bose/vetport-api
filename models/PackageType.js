const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packagetype = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const PackagetypeModel = mongoose.model("pkg_type", packagetype);
module.exports = PackagetypeModel;
