const db = require('../db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const bcryptjs = require('bcryptjs')

const listClientes = async (req, res) => {
    var clientes = db.clientes
    res.json(clientes)
}

const getClientes = async (req, res) => {
    const _id = req.params.id
    const lista_clientes = db.clientes
    const clientes = lista_clientes.find(
        (clientes) => clientes.id == _id
    )
    clientes ? res.send(clientes) : res.status(404).send({ error: 'not found' })

}

const createClientes = async (req, res) => {
    const dados = req.body;
    if (!dados.nome || !dados.email || !dados.senha) {
        return res.status(406).send({ error: 'Nome, email e senha devem ser informados' });
    }

    const emailExistente = db.clientes.some(cliente => cliente.email === dados.email);
    if (emailExistente) {
        return res.status(409).send({ error: 'Email já cadastrado' });
    }
    
    const _id = uuidv4();
    const senhaCriptografada = await bcryptjs.hashSync(dados.senha, 10)
    dados.senha = senhaCriptografada
    dados.id = _id;

    lista_clientes = db.clientes;
    lista_clientes.push(dados);
    console.log(lista_clientes);
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err) {
            return res.status(500).send({ error: 'Erro no servidor' });
        }
    });

    res.json(dados);
}
const updateClientes = async (req, res) => {
    const _id = req.params.id;
    const novosDados = req.body;
    const lista_clientes = db.clientes;
    const clientes = lista_clientes.find((clientes) => clientes.id == _id);

    if (!clientes || !novosDados) {
        return res.status(404).send({ error: 'not found' });
    }

    if (novosDados.nome !== undefined) {
        clientes.nome = novosDados.nome;
    }

    if (novosDados.preco !== undefined) {
        clientes.preco = novosDados.preco;
    }
    for (const dado in novosDados) {
        if (!dado in clientes) {
            console.log("error: este dado não existe")
            continue;
        }
        clientes[dado] = novosDados[dado];
    }

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err) {
            return res.status(500).send({ error: 'Erro no servidor' });
        }
    });

    res.json(clientes);
}

const deleteClientes = async (req, res) => {
    const _id = req.params.id;
    let lista_clientes = db.clientes;
    const clientesIndex = lista_clientes.findIndex((clientes) => clientes.id == _id);

    if (clientesIndex === -1) {
        return res.status(404).send({ error: 'não encontrado' });
    }

    lista_clientes.splice(clientesIndex, 1);

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err) {
            return res.status(500).send({ error: 'Erro no servidor' });
        }
    });

    res.status(204).send();
}

module.exports = { listClientes, getClientes, createClientes, updateClientes, deleteClientes }