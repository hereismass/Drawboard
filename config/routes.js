var controllers = require('../app/controllers');

module.exports = function(app){
	app.get('/', controllers.drawing.list);
	app.get('/new', controllers.drawing.create);
	app.post('/new', controllers.drawing.record);
	app.get('/drawing/:id', controllers.drawing.read);
};