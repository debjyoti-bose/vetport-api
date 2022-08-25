const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const status = new Schema({
  status: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const statusModel = mongoose.model("status", status);
module.exports = statusModel;
