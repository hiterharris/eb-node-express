require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

console.log(process.env.PORT)

app.get('/', (req, res) => {
  res.send('Elastic Beanstalk Node Express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})