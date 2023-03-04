
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const express = require("express");
const server = express();
const morgan = require("morgan");
const cors = require("cors");
const transactionsController = require('./controllers/transactionsController')

server.use(express.json()); 
server.use(cors())
server.use(morgan("tiny"));
server.use("/transactions", transactionsController);


server.get("/", (req, res) => {
    res.json("Welcome to Budgets backend App, use '/transactions' endpoint for more");
});

server.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

server.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
  })
