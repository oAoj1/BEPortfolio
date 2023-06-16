const express = require('express')
const router = express.Router()
const aboutMeController = require('../controllers/aboutMeController.js')

router.get('/aboutme', aboutMeController.mostrarSobreMim)
router.get('/aboutme/:id', aboutMeController.mostrarSobreMimID)
router.put('/aboutme/:id', aboutMeController.atualizarSobreMim)

module.exports = router