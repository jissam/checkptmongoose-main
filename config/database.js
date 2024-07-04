// connection database

const mongoose = require("mongoose");

module.exports.connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/checkpoint_mongoose")
    .then(() => {
      console.log("connected to database");
    })
    .catch(() => {
      console.log("error");
      process.exit(1);
    });
};
