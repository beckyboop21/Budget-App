const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");
const { validateURL } = require("../models/validations.js");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});


// CREATE
transactions.post("/", validateURL, (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray.at(-1));
});

// SHOW
transactions.get("/:arrayIndex", (req, res) => {
    if (transactionsArray[req.params.arrayIndex]) {
      res.json(transactionsArray[req.params.arrayIndex]);
    } else {
      res.redirect("/*")
    }
  });

  // DELETE
transactions.delete("/:indexArray", (req, res) => {
    const deletedtransaction = transactionsArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedtransaction);
  });
  
  // UPDATE
transactions.put("/:arrayIndex", validateURL, async (req, res) => {
    if (transactionsArray[req.params.arrayIndex]) {
      transactionsArray[req.params.arrayIndex] = req.body;
      res.status(200).json(transactionsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

module.exports = transactions;