const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  req.status(200).json({
    message: "Orders were fetched",
  });
});

router.post("/", (req, res, next) => {
  req.status(201).json({
    message: "Orders was created",
  });
});

module.exports = router;
