const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timezone = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

const TimezoneModel = mongoose.model("timezone", timezone);
module.exports = TimezoneModel;
