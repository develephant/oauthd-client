var fs = require('fs');
module.exports = function(env) {
	return {
		init: function() {
			env.server.get('/client', function( req, res ) {
				fs.readFile(__dirname + '/public/index.html', {
					encoding: 'UTF-8'
				}, function(err, data) {
					res.setHeader('Content-Type', 'text/html');
					res.json(200, data);
				});
			});
		}
	};
};
