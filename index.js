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

app.listen(8000, () => {
    console.log("8000 No'lu Port Dinleniyor..");
});