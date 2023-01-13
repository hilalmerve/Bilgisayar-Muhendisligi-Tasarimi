//Veritabanı bağlantılarını oluşturacağım dosya

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.Promise = require('bluebird');

const url = 'mongodb://0.0.0.0:27017/test';
mongoose.connect(url, function(err, db) {
  if (err) {
    console.log('error');
  } else {
  console.log('db connected' + url);

  }
})