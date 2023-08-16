const { Router } = require("express");

const router = Router();

const markets = [
  { store: "Whole Foods" },
  { store: "Trader Joes" },
  { store: "Jewel" },
];

router.get("/markets", (req, res) => {
  res.send(markets);
});

module.exports = router;
