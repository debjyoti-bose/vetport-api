const mongoose = require("mongoose");
const Manufacturer = require("./Manufacturer");
const Packagetype = require("./PackageType");
const Contenttype = require("./ContentType");
const Vendor = require("./Vendor");
const Stockfacility = require("./StockFacility");
const Schema = mongoose.Schema;

const vendoritem = new Schema({
  vendor: {
    type: Schema.Types.ObjectId,
    ref: Vendor.modelName,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  manufacturer: {
    type: Schema.Types.ObjectId,
    ref: Manufacturer.modelName,
    required: true,
  },
  packageType: {
    type: Schema.Types.ObjectId,
    ref: Packagetype.modelName,
    required: true,
  },
  contentType: {
    type: Schema.Types.ObjectId,
    ref: Contenttype.modelName,
    required: true,
  },
  packageSize: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  threshold: {
    type: Number,
    required: true,
    trim: true,
  },
  reOrder: {
    type: Number,
    required: true,
  },
  vetcove: {
    type: Boolean,
    required: true,
    default: true,
  },
  stockFacilities: {
    type: Schema.Types.ObjectId,
    ref: Stockfacility.modelName,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const VendoritemModel = mongoose.model("vendoritem", vendoritem);
module.exports = VendoritemModel;
