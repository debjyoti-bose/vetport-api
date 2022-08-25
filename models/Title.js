const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const title = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const TitleModel = mongoose.model("title", title);
module.exports = TitleModel;
