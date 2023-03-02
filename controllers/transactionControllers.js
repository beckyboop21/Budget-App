const express = require('express')
const transactionsArray = require('../models/dataModel')
const transactions = express.Router()


transactions.get('/', (req, res) => {
  res.json(transactionsArray)
})

transactions.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (transactionsArray[id]) {
    res.json(transactionsArray[id])
  } else {
    res.status(404).send(`Sorry! That ${id} doesn't exist.`)
  }
})

transactions.post('/', (req, res) => {
  transactionsArray.push(req.body)
  res.json(transactionsArray[transactionsArray.length - 1])
})

transactions.put('/:id', (req, res) => {
  const { id } = req.params
  const newData = req.body
  transactionsArray[id] = newData
  res.send(transactionsArray[id])
})
 
transactions.delete('/:id', (req, res) => {
  const { id } = req.params
  let transactionsDelete = transactionsArray.splice(id, 1)
  res.send(transactionsDelete)
})
module.exports = transactions;