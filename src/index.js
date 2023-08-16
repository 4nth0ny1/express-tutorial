const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.MONGODB_URL);

const app = express();

const PORT = 3001;
app.listen(PORT, () => console.log(`Running Express Server on Port: ${PORT}`));
