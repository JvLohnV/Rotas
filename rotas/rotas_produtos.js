const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_produtos')
const { validadorDeCookies } = require('../middlewares/validadorDeCookie')

router.get('', validadorDeCookies, controlador.listProdutos)
router.get('/:id', validadorDeCookies,controlador.getProduto)
router.post('', validadorDeCookies,controlador.createProduto)
router.post('/:id', validadorDeCookies,controlador.updateProduto)
router.delete('/:id', validadorDeCookies,controlador.deleteProduto)

module.exports = router;