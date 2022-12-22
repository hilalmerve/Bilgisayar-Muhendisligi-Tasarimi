

var mongo = require('mongodb');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    productId: Number,
    name: String,
    price: String,
    src: String
}, {collection: 'Products'});

var Product = mongoose.model('Product', productSchema);
module.exports = Product;



