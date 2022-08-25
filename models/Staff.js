const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clinic = require("./Clinic");
const State = require("./State");
const StaffDesignation = require("./StaffDesignation");
const Specialization = require("./Specialization");

const staff = new Schema(
  {
    clinic: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    address1: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: State.modelName,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    postalCode: {
      type: String,
      trim: true,
      required: true,
    },
    personalPhone: {
      type: [Object],
      required: true,
    },
    // personal_ptype: {
    //   type: Object,
    //   default: null,
    //   required: true,
    // },
    // personal_pnumber: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    staffDesignation: {
      type: Schema.Types.ObjectId,
      ref: StaffDesignation.modelName,
    },
    status: {
      type: Boolean,
      default: true,
    },
    isProvider: {
      type: Boolean,
      default: false,
    },
    specialization: {
      type: Schema.Types.ObjectId,
      ref: Specialization.modelName,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const StaffModel = mongoose.model("staff", staff);
module.exports = StaffModel;
