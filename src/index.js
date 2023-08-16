const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = 3001;

// need middleware to parse the data from post request. allows us to send json to the server
app.use(express.json());
app.use(express.urlencoded());

// simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.listen(PORT, () => console.log(`Running Express Server on Port: ${PORT}`));

const groceryList = [
  { item: "milk", quantity: 2 },
  { item: "apples", quantity: 3 },
];

app.get("/groceries", (req, res) => {
  res.send(groceryList);
});

app.post("/groceries", (req, res) => {
  // request handler
  console.log(req.body);
  groceryList.push(req.body);
  res.send(201);
});
