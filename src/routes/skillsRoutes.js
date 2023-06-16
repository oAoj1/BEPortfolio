const express = require('express')
const router = express.Router()
const skillsController = require('../controllers/skillsController.js')

router.get('/skill', skillsController.mostrarSkill)
router.get('/skill/filtrar', skillsController.filtrarSkill)
router.get('/skill/:id', skillsController.mostrarSkillID)
router.post('/skill', skillsController.adicionarSkill)
router.delete('/skill/:id', skillsController.excluirSkill)
router.put('/skill/:id', skillsController.atualizarSkill)

module.exports = router