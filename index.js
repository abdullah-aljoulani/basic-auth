'use strict'

require('dotenv').config()

const PORT = process.env.PORT || 3009

const {start} = require('./src/server')

const {DB} = require('./src/auth/models/index')

DB.sync().then(()=>{
    start(PORT)
}).catch(error => console.log(error))