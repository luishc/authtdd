const request = require('supertest');

const app = require('../../src/app');

describe('Index', () =>{
    it('should get index from api', async () =>{
        const response = await request(app)
            .get('/');

        expect(response.status).toBe(200);
    })
})