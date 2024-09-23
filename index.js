const express = require('express');
const cookieParser = require('cookie-parser');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const rotasProdutos = require('./rotas/rotas_produtos');
const rotasClientes = require('./rotas/rotas_clientes');
const rotasAutenticacao = require('./rotas/rotas_autenticacao');

const app = express();
const swaggerDocument = YAML.load('./docs/documentacao.yaml');

// Middleware
app.use(express.json());
app.use(cookieParser());

// Rotas
app.use('/produtos', rotasProdutos);
app.use('/clientes', rotasClientes);
app.use('/auth', rotasAutenticacao);

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8507) 

module.exports = app;