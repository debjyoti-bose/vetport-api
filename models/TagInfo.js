const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taginfo = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const TaginfoModel = mongoose.model("taginfo", taginfo);
module.exports = TaginfoModel;
