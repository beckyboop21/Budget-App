const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction");
const { v4: uuidv4 } = require("uuid");

transactions.use(express.json());

// INDEX
transactions.get('/', (req, res) => {
  req.body.id = uuidv4();
  res.json(transactionsArray);
});

// SHOW
transactions.get('/:index', (req, res) => {
  req.body.id = uuidv4();
  const { index } = req.params;
  if (transactionsArray[index]) {
    res.status(200).json(transactionsArray[index]);
  } else {
    res.status(404).redirect('/404');
  }
});

// CREATE
transactions.post('/', (req, res) => {
  req.body.id = uuidv4();
  transactionsArray.push(req.body);
  console.log(req.body);
  res.json(transactionsArray.at(-1));
});

// UPDATE
transactions.put('/:index', (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    transactionsArray[index] = req.body;
    res.status(200).json(transactionsArray[index]);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
});

// DELETE
transactions.delete('/:index', (req, res) => {
  const deletedTransaction = transactionsArray.splice(req.params.index, 1);
  res.status(200).json(deletedTransaction);
});

module.exports = transactions
