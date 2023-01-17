const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const VisitorsSchema = new Schema({
  Fullname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Visitors = mongoose.model("visitors", VisitorsSchema);