const mongoose = require('mongoose')

const certificatesSchema = new mongoose.Schema({
    id:String,
    curso:{type:String, required:true},
    plataforma:{type:String, required:true},
    linkCertificado:{type:String, required:true}
})

const certificados = mongoose.model('certificados', certificatesSchema)

module.exports = certificados