require('dotenv').config()

// init rest api and and db
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors'); 
const leftoverController = require("./src/controllers/LeftoverPostController");
const mongoString = process.env.DATABASE_URL

// connect to db
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
const database = mongoose.connection

// was the connect attempt successful?
database.on('error', (error) => {
  console.log(error)
})
database.once('connected', () => {
  console.log('Database Connected')
})

// create the server
const app = express()
app.use(cors())
app.use(express.json())

// import controllers
app.use("/api/leftoverpost", leftoverController)

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
})
