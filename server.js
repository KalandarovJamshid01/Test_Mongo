const express = require("express");
const db = require("./db");
const test = require("./router");
db();
const app = express();
app.use(express.json());

app.use("/api/v1/test", test);

app.listen(2000, () => {
  console.log("App listen on port 2000");
});
