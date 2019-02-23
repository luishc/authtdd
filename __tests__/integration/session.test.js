const request = require('supertest');

const app = require('../../src/app');
const User = require('../../src/app/models/User');

describe('Authentication', () => {
    it('Should authenticate with valid credentials', async () => {
        const user = await User.create({nome: 'luis', email: 'lhcnascimento@gmail.com', password: '123456'});

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });

        expect(response.status).toBe(200);
    });

    it('Should not authenticate with invalid credentials', async () => {
        const user = await User.create({nome: 'luis', email: 'lhcnascimento@gmail.com', password: '123456'});

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123"
            });

        expect(response.status).toBe(401);
    });

    it('Should return jwt token when authenticated', async () => {
        const user = await User.create({nome: 'luis', email: 'lhcnascimento@gmail.com', password: '123456'});

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });

        expect(response.body).toHaveProperty('token');
    });
})