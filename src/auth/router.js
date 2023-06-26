'use strict'

const express = require('express')

const router = express.Router();

const bcrypt = require('bcrypt')

const isAuth = require('./middleware/basic')

const { user } = require('./models/index')

router.get('/', handelHome)

router.post('/signin', isAuth,handelSignIn)

router.post('/signup', handelSignUp)

async function handelSignIn(req, res) {
    console.log('welcome');
}

function handelHome(req, res) {
    res.status(200).json({
        message: 'welcome to home page'
    })
}

async function handelSignUp(req, res) {
    const { userName, password } = req.body;
    const hashPass = await bcrypt.hash(password, 5)
    const obj = {
        userName: userName,
        password: hashPass
    }
    const record = await user.create(obj)
    res.status(201).json(record)
}
module.exports = router;