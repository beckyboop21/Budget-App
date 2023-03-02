const express = require('express')
const transactions = express.Router()
const transactionsArray = require('../models/transactions')

// INDEX
transactions.get('/', (req, res) => {
    res.json(transactionsArray)
})

// SHOW 
transactions.get('/:arrayIndex', (req, res) => {
    if (transactionsArray[req.params.arrayIndex]) {
        res.json(transactionsArray[req.params.arrayIndex])
    } else {
        res.status(404).json({ error: "Not Found" })
    }
})

// UPDATE 
transactions.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    transactionsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(transactionsArray[req.params.arrayIndex])
})

// CREATE 
transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1])
})

// DELETE 
transactions.delete("/:arrayIndex", (req, res) => {
    const deletedTransaction = transactionsArray.splice(req.params.arrayIndex, 1);
    res.status(200).json(deletedTransaction)
})

module.exports = transactions