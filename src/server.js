require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const app = require('./app');
const mongoose = require('mongoose');

app.listen(process.env.PORT || 3000);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOOSE_PATH, { useNewUrlParser: true });