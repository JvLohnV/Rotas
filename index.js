require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const rotas = require('./rotas/rotas_produtos')
const clientes = require('./rotas/rotas_clientes')
const rotas_autenticacao = require("./rotas/rotas_autenticacao")

app.use(bodyParser.json())
app.use(cookieParser())
app.use('/produtos', rotas)
app.use('/clientes', clientes)
app.use('/auth', rotas_autenticacao)

app.listen(8507) 

module.exports = app;