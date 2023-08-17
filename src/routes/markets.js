const { Router } = require("express");

const router = Router();

const markets = [
  { id: 1, store: "Whole Foods", miles: 0.5 },
  { id: 2, store: "Trader Joes", miles: 1.5 },
  { id: 3, store: "Jewel", miles: 2.5 },
  { id: 4, store: "Albertsons", miles: 10.0 },
  { id: 5, store: "Morse Market", miles: 0.2 },
];

// used this url to filter markets by miles and get the response
// http://localhost:3001/api/markets?miles=1
router.get("/markets", (req, res) => {
  const { miles } = req.query;
  const parsedMiles = parseInt(miles);

  if (!isNaN(parsedMiles)) {
    const filteredStores = markets.filter(
      (market) => market.miles <= parsedMiles
    );
    res.send(filteredStores);
  } else {
    res.send(markets);
  }

  res.send(markets);
});

module.exports = router;
