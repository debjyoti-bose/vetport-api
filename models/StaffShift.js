const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffshift = new Schema(
  {
    shiftName: {
      type: String,
      required: true,
      trim: true,
    },
    startTime: {
      type: String,
      required: true,
      trim: true,
    },
    endTime: {
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

const StaffshiftModel = mongoose.model("stafftime", staffshift);
module.exports = StaffshiftModel;
