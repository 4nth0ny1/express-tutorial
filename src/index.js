const express = require("express");
const dotenv = require("dotenv");
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");
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

// prefixed /api to the route
app.use("/api", groceriesRoute);
app.use("/api", marketsRoute);

app.listen(PORT, () => console.log(`Running Express Server on Port: ${PORT}`));
