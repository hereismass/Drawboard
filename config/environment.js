var express = require('express');
var settings = require('./settings');
var hbs = require('hbs');
var bodyparser = require('body-parser');
var models = require('../app/models');
var path = require('path');

module.exports = function(app){
	//public stuff
	app.use(express.static(path.join(settings.path, 'public')));

	//body parser
	app.use(bodyparser.urlencoded({ extended: false }));
	app.use(bodyparser.json());

	//handlebars
	app.set('view engine', 'hbs');
	app.set('views', path.join(settings.path, 'app/views'));
	hbs.registerPartials(path.join(settings.path, 'app/views/partials'));
	require('./helpers')(hbs);
	hbs.localsAsTemplateData(app);


	//middleware for models
    app.use(function (req, res, next) {
      models(function (err, db) {
        if (err) return next(err);

        req.models = db.models;
        req.db     = db;

        return next();
      });
    });
	

}