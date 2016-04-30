var path = require('path');

module.exports = {
	path : path.normalize(path.join(__dirname, '..')),
	port : 9999,
	database : {
		protocol:'sqlite',
		pathname: 'db'
	}	
};
