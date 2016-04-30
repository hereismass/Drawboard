//model Drawing
module.exports = function (orm, db) {
  var Drawing = db.define('drawing', {
    name      : { type: 'text', required: true },
    body      : { type: 'text', required: true,  big:  true }
  },{
  	hooks: {
   
    },
    validations: {
      
    },
    methods: {
   
    }
  });
};