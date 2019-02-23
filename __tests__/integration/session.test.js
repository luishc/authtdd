const User = require('../../src/app/models/User');

describe('Authentication', () => {
    it('Should sum two numbers', async () => {
        const user = await User.create({nome: 'luis teste'});
        console.log(user);
        expect(user.nome).toBe('luis teste');
    })
})