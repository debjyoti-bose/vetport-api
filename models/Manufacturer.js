const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manufacturer = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const ManufacturerModel = mongoose.model("manufacturer", manufacturer);
module.exports = ManufacturerModel;
