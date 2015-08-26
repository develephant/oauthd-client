var fs = require('fs');
module.exports = function(env) {
	return {
		init: function() {
			env.server.get('/', function( req, res ) {
				res.setHeader('Location', '/client');
				res.send(302);
			});

			env.server.get('/client', function( req, res ) {
				fs.readFile(__dirname + '/public/index.html', {
					encoding: 'UTF-8'
				}, function(err, data) {
					res.setHeader('Content-Type', 'text/html');
					res.send(200, data);
				});
			});
			
		}
	};
};
