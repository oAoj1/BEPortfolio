const skills = require('../model/skillsModel.js')

async function mostrarSkill(req,res){
    try{
        const exibirSkil = await skills.find()
        res.json(exibirSkil)

    }catch(error){
        console.log(error.message)
    }
}

async function mostrarSkillID(req,res){
    try{
        const id = req.params.id
        const exibirSkillID = await skills.findById(id)
        res.json(exibirSkillID)

    }catch(err){
        console.log(err.message)
    }
}

async function adicionarSkill(req,res){
    try{
        const novaSkill = new skills(req.body)
        const adicionandoSkill = await novaSkill.save()

        if(adicionandoSkill){
            res.send('Skill adicionada com sucesso')
        }else{
            res.send('Erro ao adicionar skill nova')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function excluirSkill(req,res){
    try{
        const id = req.params.id
        const deletarSkill = await skills.findByIdAndDelete(id)

        if(deletarSkill){
            res.send('Skill deletada com sucesso')
        }else{
            res.send('Erro ao deletar skill')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarSkill(req,res){
    try{
        const id = req.params.id
        const atualizarSkill = await skills.findByIdAndUpdate(id, {$set:req.body})

        if(atualizarSkill){
            res.send('Skill atualizada com sucesso')
        }else{
            res.send('Erro atualizar skill')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarSkill(req,res){
    try{
        const skill = req.query.skill
        skills.find({'skill': skill})
            .then(skill => {
                res.json(skill)
            })
            .catch(err => {
                console.log(err.message)
            })

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    mostrarSkill,
    mostrarSkillID,
    adicionarSkill,
    excluirSkill,
    atualizarSkill,
    filtrarSkill
}