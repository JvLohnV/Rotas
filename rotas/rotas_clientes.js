const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_clientes')
const { validadorDeCookies } = require('../middlewares/validadorDeCookie')

router.get('', validadorDeCookies,controlador.listClientes)
router.get('/:id', validadorDeCookies,controlador.getClientes)
router.post('', validadorDeCookies,controlador.createClientes)
router.post('/:id', validadorDeCookies,controlador.updateClientes)
router.delete('/:id', validadorDeCookies,controlador.deleteClientes)

module.exports = router;