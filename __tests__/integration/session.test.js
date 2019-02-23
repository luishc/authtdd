const request = require('supertest');

const app = require('../../src/app');
const factory = require('../utils/factory');

describe('Authentication', () => {
    it('Should authenticate with valid credentials', async () => {
        const user = await factory.create('User', { password: '123456' });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });

        expect(response.status).toBe(200);
    });

    it('Should not authenticate with invalid credentials', async () => {
        const user = await factory.create('User');

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123"
            });

        expect(response.status).toBe(401);
    });

    it('Should not authenticate with email that not exist', async () => {
        const user = await factory.create('User');

        const response = await request(app)
            .post('/sessions')
            .send({
                email: "teste@teste.com",
                password: "123"
            });

        expect(response.status).toBe(401);
    });

    it('Should return jwt token when authenticated', async () => {
        const user = await factory.create('User', { password: '123456' });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });

        expect(response.body).toHaveProperty('token');
    });
})