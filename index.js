const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require("./config/db")
connectDB()
const port = process.env.PORT || 3030

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`mongoose app listening on port ${port}`)
})
