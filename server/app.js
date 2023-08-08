const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT
const db = process.env.MONGO_URL

const start = async () => {
  try {
    await mongoose.connect(db)
    app.listen(port, () => console.log(`App listening on port ${port}`))
    console.log('Connected to DB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
