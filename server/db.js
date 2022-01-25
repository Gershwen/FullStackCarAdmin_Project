const mongoose = require("mongoose");
const {dbUri} = require("./config");


//connecting to the database
module.exports = async () => {
  await mongoose.connect(dbUri);
  console.log("Connected to database.");
};
