require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Elastic Beanstalk Node Express')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
