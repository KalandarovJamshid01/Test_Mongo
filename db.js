const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/TestExim";
const db = () => {
  mongoose
    .connect(url, {})
    .then(() => {
      console.log("DATABASE connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
