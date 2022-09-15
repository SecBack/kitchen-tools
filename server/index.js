require('dotenv').config()

// init rest api and and db
const express = require('express')
const mongoose = require('mongoose')
const router = require('./src/controllers/routes')
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

// run the server
const app = express()
app.use(express.json())
app.use("/api", router)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})