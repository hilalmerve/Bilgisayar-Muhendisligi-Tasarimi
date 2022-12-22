//Veritabanı bağlantılarını oluşturacağım dosya
/*const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const databaseName = "yourDBName";

MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  const db = client.db(databaseName);
});*/

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


//main().catch(err => console.log(err));
/*async function main() {
  await mongoose.connect();
  console.log('Veritabanı bağlandı');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}*/