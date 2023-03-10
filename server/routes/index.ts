import express from "express";
const router = express.Router();

// router.use("/pokemon", require("./pokemon/index"));

router.get("/", (req, res) => {
  res.send("Welcome to new API");
});

module.exports = router;
