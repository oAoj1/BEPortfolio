const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    id:{type:String},
    habilidade:{type:String, required:true},
    skill:{type:String},
})

const skills = mongoose.model('skills', skillsSchema)

module.exports = skills