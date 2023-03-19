const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  name: {
    type: String,
  },
});

const Test = mongoose.model("tests", testSchema);

module.exports = Test;
