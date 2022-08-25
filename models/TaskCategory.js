const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskcategory = new Schema({
  Categoryname: {
    type: String,
  },
  Status: {
    type: Boolean,
  },
});

const TaskcategoryModel = mongoose.model("task_cat", taskcategory);
module.exports = TaskcategoryModel;
