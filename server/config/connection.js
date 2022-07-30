const mongoose = require('mongoose');

mongoose.connect(process.env.MONGDB_URI || 'mongodb://127.0.0.1/deep-thoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

module.exports = mongoose.connection;
