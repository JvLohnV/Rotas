const request = require('supertest');
const app = require('../index');
let _id;  // Variável para armazenar o ID do cliente criado

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes/').send();
        expect(res.status).toBe(200);
    });

    it('verificar se a lista de clientes está cheia', async () => {
        const res = await request(app).get('/clientes/').send();
        expect(res.body).toBeDefined();
    });

    it('deve retornar 404 quando não há clientes', async () => {
        const res = await request(app).get('/clientes/invalid_id').send();
        expect(res.status).toBe(404);
    });
});

describe('POST /clientes', () => {
    it('criar cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/').send({
            nome: 'Jão Vitor',
            email: 'Jv@lohn.com',
            senha: '54321'
        });
        expect(res.status).toBe(201);
        _id = res.body.id; // Armazena o ID do cliente criado para uso posterior
    });

    it('deve retornar 400 se o email estiver faltando', async () => {
        const res = await request(app).post('/clientes/').send({
            nome: 'Jão Vitor',
            senha: '54321'
        });
        expect(res.status).toBe(400); // Verifica se o status é 400
    });

    it('deve retornar 400 se o nome estiver faltando', async () => {
        const res = await request(app).post('/clientes/').send({
            email: 'Jv@lohn.com',
            senha: '54321'
        });
        expect(res.status).toBe(400); // Verifica se o status é 400
    });
});

describe('GET /clientes/:id', () => {
    it('listar 1 cliente pelo ID com sucesso', async () => {
        const res = await request(app).get(`/clientes/${_id}`).send();
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id', _id); // Verifica se o ID é correto
    });

    it('deve retornar 404 para cliente não encontrado', async () => {
        const res = await request(app).get('/clientes/invalid_id').send();
        expect(res.status).toBe(404);
    });
});

describe('PUT /clientes/:id', () => {
    it('Atualizar nome do cliente com sucesso', async () => {
        const res = await request(app).put(`/clientes/${_id}`).send({
            nome: 'Jão Vitor Atualizado',
            email: "BD@texte.com",
        });
        expect(res.status).toBe(200);
    });

    it('deve retornar 404 se o cliente não existir', async () => {
        const res = await request(app).put('/clientes/invalid_id').send({
            nome: 'Novo Nome',
            email: "novo_email@texte.com",
        });
        expect(res.status).toBe(404);
    });

    it('deve retornar 400 se o nome estiver faltando', async () => {
        const res = await request(app).put(`/clientes/${_id}`).send({
            email: "novo_email@texte.com",
        });
        expect(res.status).toBe(400); // Verifica se o status é 400
    });
});

describe('DELETE /clientes/:id', () => {
    it('deletar cliente com sucesso', async () => {
        const res = await request(app).delete(`/clientes/${_id}`).send();
        expect(res.status).toBe(204); // Geralmente 204 para deleção bem-sucedida
    });

    it('deve retornar 404 ao tentar deletar cliente que não existe', async () => {
        const res = await request(app).delete('/clientes/invalid_id').send();
        expect(res.status).toBe(404);
    });
});