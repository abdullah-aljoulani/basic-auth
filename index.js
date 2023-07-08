'use strict'

require('dotenv').config()

const PORT = process.env.PORT || 3009

const {start} = require('./src/server')

const {db} = require('./src/auth/models/index')

db.sync().then(()=>{
    start(PORT)
}).catch(error => console.log(error))