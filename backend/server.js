const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const noiseRouter = require('./routes/noise')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true })

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("mongoose database connection established successfully")
})

app.use('/users', userRouter)
app.use('/noises', noiseRouter)

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})