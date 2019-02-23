require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const mongoose = require('mongoose');

require('../src/app/models/User');

beforeEach(function(done) {

    function clearDB() {
      for (var i in mongoose.connection.collections) {
        mongoose.connection.collections[i].deleteOne(function() {});
      }
      return done();
    }
  
    if (mongoose.connection.readyState === 0) {
      mongoose.connect(
        process.env.MONGOOSE_PATH,
        { useNewUrlParser: true },
        function(err) {
          if (err) {
            throw err;
          }
          return clearDB();
        }
      );
    } else {
      return clearDB();
    }
  });
  
  afterEach(function(done) {
    return done();
  });
  
  afterAll(done => {
    mongoose.disconnect();
    return done();
  });
