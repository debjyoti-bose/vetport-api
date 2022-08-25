const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = require("./Country");
const State = require("./State");
const Timezone = require("./TimeZone");
const McLocation = require("./McLocation");

const clinic = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    clinicType: {
      brickAndMortar: {
        type: Boolean,
        default: false,
      },
      referral: {
        type: Boolean,
        default: false,
      },
      equine: {
        type: Boolean,
        default: false,
      },
      mobile: {
        type: Boolean,
        default: false,
      },
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: McLocation.modelName,
    },
    address1: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: Country.modelName,
      required: true,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: State.modelName,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    postalCode: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    timeZone: {
      type: Schema.Types.ObjectId,
      ref: Timezone.modelName,
      required: true,
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
    phoneNumber: {
      type: [Object],
      required: true,
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

const ClinicModel = mongoose.model("clinic", clinic);
module.exports = ClinicModel;
