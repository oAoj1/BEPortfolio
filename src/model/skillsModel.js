const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    id:{type:String},
    rank:{type:String, required:true},
    habilidade:{type:String, required:true},
    skill:{type:String, required:true},
})

const skills = mongoose.model('skills', skillsSchema)

module.exports = skills