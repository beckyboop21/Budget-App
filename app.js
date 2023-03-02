const express = require('express');
const transactionsController = require('./Controllers/transactions.controller')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('<h1>Budget-App !</h1>')
})
app.use((req, res, next) => {
  console.log('REQUEST MADE', req.method, req.url)
  next()
})
app.use('/transaction', transactionsController)
app.use('*', (req, res) => {
  res.status(404).send('Oops! Nothing to see here.')
})
module.exports = app