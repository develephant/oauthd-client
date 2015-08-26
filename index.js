var fs = require('fs');
module.exports = function(env) {
	return {
		init: function() {
			return env.server.get('/', function( req, res ) {
				fs.readFile(__dirname + '/public/', {
					encoding: 'UTF-8'
				}, function( err, data ) {
					res.setHeader('Content-Type', 'text/html');
					res.send(200, data);
				});
			});
		}
	};
};
