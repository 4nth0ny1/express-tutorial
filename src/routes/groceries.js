const { Router } = require("express");

const router = Router();

const groceryList = [
  { id: 1, item: "milk", quantity: 2 },
  { id: 2, item: "apples", quantity: 3 },
  { id: 3, item: "oranges", quantity: 6 },
  { id: 4, item: "carrots", quantity: 8 },
  { id: 5, item: "pizza", quantity: 1 },
];

// filter results by quantity
// http://localhost:3001/api/groceries?quantity=2
// router.get("/groceries", (req, res) => {
//   const { quantity } = req.query;
//   const parsedQuantity = parseInt(quantity);

//   if (!isNaN(parsedQuantity)) {
//     const filteredList = groceryList.filter(
//       (item) => item.quantity <= parsedQuantity
//     );
//     res.send(filteredList);
//   } else {
//     res.send(groceryList);
//   }

//   res.send(groceryList);
// });

router.get("/groceries", (req, res) => {
  res.cookie("visited", true, {
    maxAge: 60000, // expires the cookie
  });
  res.send(groceryList);
});

router.get("/groceries/:item", (req, res) => {
  console.log(req.cookies);
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
