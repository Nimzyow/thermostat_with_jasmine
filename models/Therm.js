const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  temperature: {
    type: Number
  },
  city: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("therm", UserSchema);
