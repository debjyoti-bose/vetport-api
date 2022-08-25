const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clinic = require("./Clinic");
const Title = require("./Title");
const State = require("./State");
const Staff = require("./Staff");

const clientregistration = new Schema(
  {
    clinic: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
    },
    title: {
      type: Schema.Types.ObjectId,
      ref: Title.modelName,
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
    address1: {
      type: String,
      required: true,
      trim: true,
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
    phoneNumber: {
      type: [Object],
      required: true,
    },
    preferredProvider: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
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

const ClientModel = mongoose.model("client", clientregistration);
module.exports = ClientModel;
