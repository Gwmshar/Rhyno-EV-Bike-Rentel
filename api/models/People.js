const mongoose = require("mongoose");

const people = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  model: String,
  city: String,
  state: String,
  phone: Number,
});

module.exports.People = mongoose.model("people", people);
