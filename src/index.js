const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = 3001;
app.listen(PORT, () => console.log(`Running Express Server on Port: ${PORT}`));
