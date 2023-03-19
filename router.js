const router = require("express").Router();
const Test = require("./model");

router
  .route("/")
  .post(async (req, res) => {
    try {
      const data = await Test.create(req.body);

      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  })
  .get(async (req, res) => {
    const data = await Test.find();
    res.status(200).json(data);
  });
module.exports = router;
