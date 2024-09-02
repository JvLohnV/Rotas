/* const request = require('supertest');
const app = require('../index');

describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos/').send();
        expect(res.status).toBe(200);
    });

    it('verificar se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos/').send();
        expect(res.body).toBeDefined();
    });

    it('pegar somente um produto por id com sucesso', async () => {
        const res = await request(app).get('/produtos/' + _id).send();
        const _id = res.body.id;
        expect(res.status).toBe(200);
    });
});

describe('POST /produtos', () => {
    it('criar produto com sucesso', async () => {
        const res = await request(app).post('/produtos/').send({
            nome: 'João Vitor',
            email: 'joaovitor@texte.com',
            senha: '54321'
        });
        expect(res.status).toBe(204);

        const _id = res.body.id;
        const del = await request(app).delete('/produtos/' + _id).send();
        expect(del.status).toBe(200);
    });

    it('erro ao tentar criar produto sem nome', async () => {
        const res = await request(app).post('/produtos/').send({
            email: 'semnome@teste.com',
            senha: '54321'
        });
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Nome é obrigatório');
    });

    it('erro ao tentar criar produto sem e-mail', async () => {
        const res = await request(app).post('/produtos/').send({
            nome: 'Sem Email',
            senha: '54321'
        });
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Email é obrigatório');
    });

    it('erro ao tentar criar produto sem senha', async () => {
        const res = await request(app).post('/produtos/').send({
            nome: 'Sem Senha',
            email: 'semsenha@teste.com'
        });
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Senha é obrigatória');
    });

    it('atualizar nome do produto com sucesso', async () => {
        const res = await request(app).post('/produtos/').send({
            nome: 'João Vitor',
            email: 'joaovitor@texte.com',
            senha: '54321'
        });
        const _id = res.body.id;

        res = await request(app).put('/produtos/' + _id).send({
            nome: 'Jão Vitor'
        });
        expect(res.status).toBe(200);

        await request(app).delete('/produtos/' + _id).send();
    });
});

describe('DELETE /produtos/:id', () => {
    it('deletar o usuario com o id com sucesso', async () => {
        const res = await request(app).delete('/produtos/' + _id).send();
        expect(res.status).toBe(200);
    });

    it('erro ao tentar deletar produto com id invalido', async () => {
        const res = await request(app).delete('/produtos/').send();
        expect(res.body.error).toBe('produto não encontrado');
        expect(res.status).toBe(404);
    });
});
 */