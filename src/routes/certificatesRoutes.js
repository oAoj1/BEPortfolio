const express = require('express')
const router = express.Router()
const certificatesController = require('../controllers/certificatesController.js')

router.get('/certificates', certificatesController.mostrarCertificados)
router.get('/certificates/filtrar', certificatesController.filtrarCertificos)
router.get('/certificates/:id', certificatesController.mostrarCertificadosID)
router.post('/certificates', certificatesController.adicionarCertificados)
router.put('/certificates/:id', certificatesController.atualizarCertificados)
router.delete('/certificates/:id', certificatesController.deletarCertificados)

module.exports = router