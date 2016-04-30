var path = require('path');
var express = require('express');
var settings = require('./config/settings');
var environment = require('./config/environment');
var routes = require('./config/routes');
//var models = require('./app/models');

var app = express();

environment(app);
routes(app);
console.log(settings.port);
app.listen(settings.port);