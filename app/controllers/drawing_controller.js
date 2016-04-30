var orm = require('orm');

module.exports = {
	list: function(req, res){
		res.render('index');	
	},
	create: function(req, res){
		res.render('create');
	},
	record: function(req, res){
		req.models.drawing.create({name: req.body.name, body: req.body.drawing}, function (err, drawing) {
	      if(err) {
	        console.log("Error recording the drawing : " + err);
	      }

	      return res.send(drawing);
	    });
	},
	read: function(req, res){
		console.log("id : " +req.params.id);
		req.models.drawing.get(req.params.id, function(err, drawing){
			if(err){
				console.log("error getting the drawing : " + err);
			}
			else{
				console.log(drawing.body);
				res.render('drawing', {drawing: drawing});
			}
		});
		
	}
}