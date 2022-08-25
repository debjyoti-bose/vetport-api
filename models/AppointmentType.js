const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmenttype = new Schema(
  {
    appointment_type: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    appointment_note: {
      type: String,
      trim: true,
    },
    default: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, strict: false }
);

const AppointmenttypeModel = mongoose.model("app_type", appointmenttype);
module.exports = AppointmenttypeModel;
