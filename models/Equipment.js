const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clinic = require("./Clinic");
const EquipmentCategory = require("./EquipmentCategory");
const Vendor = require("./Vendor");

const equipment = new Schema(
  {
    clinic: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
      required: true,
    },
    equipmentCategory: {
      type: Schema.Types.ObjectId,
      ref: EquipmentCategory.modelName,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    serialNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: Vendor.modelName,
    },
    serviceAgent: {
      type: Schema.Types.ObjectId,
      ref: Vendor.modelName,
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

const EquipmentModel = mongoose.model("eqpt", equipment);
module.exports = EquipmentModel;
