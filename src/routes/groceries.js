const { Router } = require("express");

const router = Router();

const groceryList = [
  { id: 1, item: "milk", quantity: 2 },
  { id: 2, item: "apples", quantity: 3 },
];

router.get("/groceries", (req, res) => {
  res.send(groceryList);
});

router.get("/groceries/:item", (req, res) => {
  const { item } = req.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  res.send(groceryItem);
});

router.post("/groceries", (req, res) => {
  // request handler
  console.log(req.body);
  groceryList.push(req.body);
  res.send(201);
});

module.exports = router;
