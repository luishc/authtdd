const bcrypt = require('bcryptjs');
const User = require('../../src/app/models/User');

describe('User', () => {
    it('should encrypt user password', async () => {
        const user = await User.create({
            nome: 'Luis',
            email: 'lhcnascimento@gmail.com',
            password: '123456'
        });

        var comparedHash = await bcrypt.compare('123456', user.password);
        expect(comparedHash).toBe(true);
    });
});