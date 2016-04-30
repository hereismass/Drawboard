var models = require('./app/models');

//db reset
models(function (err, db) {
  if (err) throw err;

  db.drop(function (err) {
    if (err){
    	console.log("error dropping");
    }

    db.sync(function (err) {
      if (err){
      	console.log("error syncing");
      }

      db.models.drawing.create({
        name: "White Ocean", body: "[]"
      }, function (err, message) {
        if (err){
        	console.log("error fixture");
        }

        db.close()
        console.log("Done!");
      });
    });
  });
});