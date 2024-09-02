const request = require('supertest');
const app = require('../index');
const _id = res.body.id;


describe('GET, GET ONE /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes/').send();
        expect(res.status).toBe(200);
    });

    it('verificar se a lista de clientes está cheia', async () => {
        const res = await request(app).get('/clientes/').send();
        expect(res.body).toBeDefined();
    });

    it('pegar somente um cliente por id com sucesso', async () => {
        const res = await request(app).get('/clientes/' + _id).send();
        expect(res.status).toBe(200);
    });
    
});


describe('POST, ERROS /clientes/:id', () => {
    it('criar cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/').send({
            nome: 'João Vitor',
            email: 'joaovitor@texte.com',
            senha: '54321'
        });
        expect(res.status).toBe(204);
        const _id = res.body.id;
    });

    it('erro ao tentar criar cliente sem nome', async () => {
        const res = await request(app).post('/clientes/').send({
            email: 'semnome@teste.com',
            senha: '54321'
        });
        expect(res.status).toBe(400);  
        expect(res.body.error).toBe('Nome é obrigatório');
    });

    it('erro ao tentar criar cliente sem e-mail', async () => {
        const res = await request(app).post('/clientes/').send({
            nome: 'Sem Email',
            senha: '54321'
        });
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Email é obrigatório');
    });

    it('erro ao tentar criar cliente sem senha', async () => {
        const res = await request(app).post('/clientes/').send({
            nome: 'Sem Senha',
            email: 'semsenha@teste.com'
        });
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Senha é obrigatória');
    });

});


describe('ATUALIZAR /clientes/:id', () => {
    it('atualizar nome do cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/' + _id).send(
           {
               nome:'Jão Vitor'
           })
           expect(res.status).toBe(200)
    })
})

/* 
describe('DELETE, ERRO /clientes/:id', () => {
    it('deletar o usuario com o id com sucesso', async () => {
        const createRes = await request(app).post('/clientes/').send({
            nome: 'João Vitor',
            email: 'joaovitor@texte.com',
            senha: '54321'
        });
        const _id = createRes.body.id;

        const res = await request(app).delete('/clientes/' + _id).send();
        expect(res.status).toBe(200);
    });

    it('erro ao tentar deletar cliente com id invalido', async () => {
        const res = await request(app).delete('/clientes/invalidID').send();
        expect(res.status).toBe(404); 
        expect(res.body.error).toBe('Cliente não encontrado');
    });
}); */
 
