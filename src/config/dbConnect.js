const mongoose = require('mongoose')
const conexao = process.env.MONGO_URI

mongoose.connect(conexao)

const db = mongoose.connection

module.exports = db