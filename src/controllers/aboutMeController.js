const sobremims = require('../model/aboutMeModel.js')

async function mostrarSobreMim(req,res){
    try{
        const exibirSobreMim = await sobremims.find()
        res.json(exibirSobreMim)

    }catch(error){
        console.log(error.message)
    }
}

async function mostrarSobreMimID(req,res){
    try{
        const id = req.params.id
        const exibirSobreMimID = await sobremims.findById(id)
        res.json(exibirSobreMimID)
        
    }catch(error){
        console.log(error.message)
    }
}

async function atualizarSobreMim(req,res){
    try{
        const id = req.params.id
        const atualizandoSobreMim = await sobremims.findByIdAndUpdate(id, {$set:req.body})

        if(atualizandoSobreMim){
            res.send('Sobre mim atualizado com sucesso')
        }else{
            res.send('Erro ao atualizar sobre mim')
        }

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    mostrarSobreMim,
    mostrarSobreMimID,
    atualizarSobreMim
}