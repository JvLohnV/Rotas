const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas = require('./rotas/rotas_produtos')
const clientes = require('./rotas/rotas_clientes')

app.use(bodyParser.json())

app.use('/produtos', rotas)
app.use('/clientes', clientes)

/* app.listen(8507) */

module.exports = app;