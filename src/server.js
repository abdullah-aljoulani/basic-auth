'use strict'

const express = require('express')
const app = express();

const cors = require('cors')

app.use(cors());
app.use(express.json())

const userRouter = require('./auth/router')

app.use(userRouter)

function start(PORT){
    app.listen(PORT,()=> console.log(`running on port ${PORT}`))
}

module.exports = {
    app,
    start
}