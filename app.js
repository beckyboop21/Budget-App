
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController");


// DEPENDENCIES
const express = require("express");
let transactionsArray = require("./controllers/transactionsController");
var cors = require('cors')

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json()); // Parse JSON
app.use("/transactions", transactionsArray);

// ROUTES
app.get("/", (req, res) => {
    res.send("welcome to my Budget app");
  });

  app.get("/transactions", )
  // 404 PAGE
  app.get("*", (req, res) => {
      res.json({ error: "Page not found" });
    });
  
  // EXPORT
  module.exports = app;