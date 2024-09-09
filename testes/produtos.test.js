/* const request = require('supertest');
const app = require('../index');

let _id;  // Variável para armazenar o ID do produto criado

describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos/').send();
        expect(res.status).toBe(200);
    });

    it('verificar se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos/').send();
        expect(res.body).toBeDefined();
    });

    it('deve retornar 404 quando não há produtos', async () => {
        const res = await request(app).get('/produtos/invalid_id').send();
        expect(res.status).toBe(404);
    });
});

describe('POST /produtos', () => {
    it('criar produto com sucesso', async () => {
        const res = await request(app).post('/produtos/').send({
            nome: 'Produto Teste',
            preco: 100,
            descricao: 'Teste'
        });
        expect(res.status).toBe(201);
        _id = res.body.id; // Armazena o ID do produto criado para uso posterior
    });

    it('deve retornar 400 se o nome estiver faltando', async () => {
        const res = await request(app).post('/produtos/').send({
            preco: 100,
            descricao: 'Teste'
        });
        expect(res.status).toBe(400); // Verifica se o status é 400
    });

    it('deve retornar 400 se o preço estiver faltando', async () => {
        const res = await request(app).post('/produtos/').send({
            nome: 'Produto Teste',
            descricao: 'Teste'
        });
        expect(res.status).toBe(400); // Verifica se o status é 400
    });
});

describe('GET /produtos/:id', () => {
    it('listar 1 produto pelo ID com sucesso', async () => {
        const res = await request(app).get(`/produtos/${_id}`).send();
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id', _id); // Verifica se o ID é correto
    });

    it('deve retornar 404 para produto não encontrado', async () => {
        const res = await request(app).get('/produtos/invalid_id').send();
        expect(res.status).toBe(404);
    });
});

describe('PUT /produtos/:id', () => {
    it('Atualizar produto com sucesso', async () => {
        const res = await request(app).put(`/produtos/${_id}`).send({
            nome: 'Produto Teste Atualizado',
            preco: 150,
            descricao: 'Atualizado',
        });
        expect(res.status).toBe(200);
    });

    it('deve retornar 404 se o produto não existir', async () => {
        const res = await request(app).put('/produtos/invalid_id').send({
            nome: 'Novo Nome',
            preco: 150,
            descricao: 'Novo',
        });
        expect(res.status).toBe(404);
    });

    it('deve retornar 400 se o nome estiver faltando', async () => {
        const res = await request(app).put(`/produtos/${_id}`).send({
            preco: 150,
            descricao: 'Novo',
        });
        expect(res.status).toBe(400); // Verifica se o status é 400
    });
});

describe('DELETE /produtos/:id', () => {
    it('deletar produto com sucesso', async () => {
        const res = await request(app).delete(`/produtos/${_id}`).send();
        expect(res.status).toBe(204); // Geralmente 204 para deleção bem-sucedida
    });

    it('deve retornar 404 ao tentar deletar produto que não existe', async () => {
        const res = await request(app).delete('/produtos/invalid_id').send();
        expect(res.status).toBe(404);
    });
}); */