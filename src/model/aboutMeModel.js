const mongoose = require('mongoose')

const aboutMeSchema = new mongoose.Schema({
    id:String,
    cargoAtual:{type:String, required:true},
    cursando:{type:String, required:true},
    trabalhando:{type:String, required:true},
    interesse:{type:String, required:true},
    biografia:{type:String,required:true},
    experiencia:{type:String,required:true}
})

const sobremims = mongoose.model('sobremims', aboutMeSchema)

module.exports = sobremims