const User = require('../models/User');

class SessionControler {
    async store(req, res){
        const { email, password } = req.body;
        const user = await User.findOne({ 'email': email });

        if(!user){
            return res.status(401).json({ message: 'User not found' });
        }

        if(!(await user.checkPassword(password))){
            return res.status(401).json({ message: 'Invalid password' });
        }

        return res.json({ user, token: user.generateToken() });
    }
}

module.exports = new SessionControler();