const express = require('express');

class AppControler{
    constructor(){
        this.express = express();

        this.middleware();
        this.route();
    }

    middleware(){
        this.express.use(express.json());
    }

    route(){
        this.express.use(require('./routes'))
    }
}

module.exports = new AppControler().express;