const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//We set the below scheme to determine the rules for the data we want from our inputs
let carSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  registration: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("car",carSchema);
