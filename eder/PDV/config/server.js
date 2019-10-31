const consign = require('consign')
const express = require('express')

const app = express()

consign()
  .then('./api')
  .then('./config/routes/')
  .into(app)

app.listen(5050, () => {
  console.log('Executando na porta 5050.....')
})