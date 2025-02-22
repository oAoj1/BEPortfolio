require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECT)

const db = mongoose.connection

module.exports = db