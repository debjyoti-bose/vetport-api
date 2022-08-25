const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentStatus = new Schema(
  {
    status_name: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      trim: true,
    },
    redirectTo: {
      type: String,
      enum: ["EMR", "Checkin/Workflow", "Checkout", "Hospitalization"],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const AppointmentStatusModel = mongoose.model("app_status", appointmentStatus);
module.exports = AppointmentStatusModel;
