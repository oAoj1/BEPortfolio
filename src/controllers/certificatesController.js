const certificados = require('../model/certificatesModel.js')

async function mostrarCertificados(req,res){
    try{
        const exibirCertificados = await certificados.find()
        res.json(exibirCertificados)

    }catch(error){
        console.log(error.message)
    }
}

async function mostrarCertificadosID(req,res){
    try{
        const id = req.params.id
        const exibirCertificadosID = await certificados.findById(id)
        res.json(exibirCertificadosID)

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarCertificos(req,res){
    try{
        const plataforma = req.query.plataforma
        certificados.find({'plataforma':plataforma})
            .then(plat => {
                res.json(plat)
            })
            .catch(err => {
                console.log(err.message)
            })

    }catch(error){
        console.log(error.message)
    }
}

async function adicionarCertificados(req,res){
    try{
        const novoCertificado = new certificados(req.body)
        const salvarCertificado = novoCertificado.save()

        if(salvarCertificado){
            res.send('Certificado adicionado com sucesso')
        }else{
            res.send('Erro ao adicionar certificado')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarCertificados(req,res){
    try{
        const id = req.params.id
        const renovarCertificado = await certificados.findByIdAndUpdate(id, {$set:req.body})
        
        if(renovarCertificado){
            res.send('Certificado atualizado com sucesso')
        }else{
            res.send('Erro ao atualizar certificado')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function deletarCertificados(req,res){
    try{
        const id = req.params.id
        const excluirCertificado = await certificados.findByIdAndDelete(id)

        if(excluirCertificado){
            res.send('Certificado excluido com sucesso')
        }else{
            res.send('Erro ao excluir certificado')
        }
        
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    mostrarCertificados,
    mostrarCertificadosID,
    filtrarCertificos,
    adicionarCertificados,
    atualizarCertificados,
    deletarCertificados
}