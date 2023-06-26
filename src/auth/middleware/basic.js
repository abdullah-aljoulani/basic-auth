'use strict'

const base64 = require('base-64')

const bcrypt = require('bcrypt')

const { user } = require('../models/index')

module.exports = async function isAuth(req,res,next){

    const split = await req.headers.authorization.split(" ")

    const auth = split[1]

    if (auth) {
        const decrypted = base64.decode(auth)

        const [userName, password] = decrypted.split(":")

        const users = await user.findOne({ where: { userName } })

        const isValid = await bcrypt.compare(password, users.password)
        if (isValid) {
            res.status(200).json(`welcome back ${users.userName}`)
            next()
        } else {
            res.status(500).json('wrong password or username')
        }
    } else {
        res.status(500).json({
            message: 'please enter the username and password'
        })
    }
}