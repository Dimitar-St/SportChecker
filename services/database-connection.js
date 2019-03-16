const mongoose = require('mongoose'),
      connectionString = 'mongodb://localhost:27017/SportChecker';

module.exports =  {
    connect: () => mongoose.connect(connectionString)
}
