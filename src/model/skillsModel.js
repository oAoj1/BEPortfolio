const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    id:{type:String},
    habilidade:{type:String, required:true},
    rank:{type:String},
})

const skills = mongoose.model('skills', skillsSchema)

module.exports = skills