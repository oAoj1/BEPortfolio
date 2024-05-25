const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://joao:123@portfolio.mtflh4c.mongodb.net/portfolio")

const db = mongoose.connection

module.exports = db 