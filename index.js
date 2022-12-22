var http = require('http');
var fs = require('fs');
var jsdom = require("jsdom"); 
var express = require("express");
var app = express();
var path = require('path');
var ejsLayouts = require("express-ejs-layouts");
var bodyParser = require('body-parser');
var db = require('./app_server/models/db');

var url = require('url');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/app_server/views'));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(ejsLayouts);

app.use('/public', express.static(path.join(__dirname, 'public')));
require('./app_server/routers/routeManager')(app);
//const app = require("app");




//------Veritabanı İşlemleri----------
/*var Product = require('./app_server/models/product');
var newProduct = new Product({
    productId: 1,
    brand: 'Lenovo',
    productName: 'Dizüstü Bilgisayar',
    price: '10.000 TL'
});

newProduct.save(function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Product saved!');
    }
});*/
//------Veritabanı İşlemleri-----------



//Yönlendiriciler ekleniyor.

/*app.use("/products/:id", function(req, res) {
    //res.send("product details" + req.params);
    res.render("sayfa");
});*/

/*const data = [
    {id: 1, name: "Telefon"},
];
app.use("/products/:is", function(req, res) {
    const urun = data.find(u => u.id == req.params.id);
    res.render("sayfa", urun);
});*/



//--------
/*var address = 'https://www.trendyol.com/casper/excalibur-g770-1245-bvh0x-b-12-nesil-intel-core-i5-12450h-16-gb-ram-500-gb-ssd-4gb-gtx-1650-freedos-p-358993624?boutiqueId=61&merchantId=114258&advertItems=eyJhZHZlcnRJZCI6ImFlMTIxYzFiLTQzZTctNGY5YS1iZGY2LWQ5ZWMzZDUzODI4ZiIsInNvcnRpbmdTY29yZSI6MjcuOTQyMjg2NDgwMSwiYWRTY29yZSI6MjcuOTQyMjg2NDgwMSwiY3BjIjoxLCJtaW5DcGMiOjAuMDEsImFkdmVydFNsb3QiOjEsImVjcGMiOjAuOTYxMTQ2OTY2NTYzNjI4Mywib3JkZXIiOjB9';
var q = url.parse(address, true);
 
console.log(q.search.id);
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/index.php'
//console.log(q.search); //returns '?type=page&action=update&id=5221'
 var string = (q.pathname).split("-");
 console.log(string);
 var size = string.length;
 console.log(string[size-1]);
 console.log((q.host + "/" + string[size-1]));*/
 //------------------------------------------------------------




/*app.use("/", function(req, res) {
    res.render("home");
});*/
/*app.get('/myform', function(req, res){  
    var myText = req.query.mytext; //mytext is the name of your input box 
    res.send('Your Text:' + myText);
    console.log(myText.values);
});  */

//const { JSDOM } = jsdom; 
//const dom = new JSDOM('home'); 
//console.log(dom.window.document.querySelector(".myText").values); 
//console.log(dom.window.document.getElementsByClassName(".myText").textContent);
app.listen(8000, () => {
    console.log("8000 No'lu Port Dinleniyor..");
});

/*http.createServer((req, res) => {
    fs.readFile('sayfa.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);*/