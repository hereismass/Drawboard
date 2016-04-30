var orm = require('orm');

module.exports = {
	list: function(req, res){
		res.render('index');	
	},
	create: function(req, res){
		res.render('create');
	},
	record: function(req, res){
		//do stuff
		var name = req.body.name;
		var drawing = req.body.drawing;
		console.log("name :" + name + "draw : " + drawing);

		req.models.drawing.create({name: req.body.name, body: req.body.drawing}, function (err, message) {
	      if(err) {
	        console.log("Error recording the drawing");
	      }

	      return res.sendStatus(200);
	    });
	},
	read: function(req, res){
		res.render('drawing');
	}
}