const mongoose = require("mongoose");
//this is the model and we specify what the data will look like
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
