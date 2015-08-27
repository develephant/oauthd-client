var fs = require('fs');
module.exports = function(env) {
	return {
		init: function() {
			env.server.get('/dashboard', function( req, res ) {
				fs.readFile('public/index.html',{encoding:'UTF-8'},function(err,data) {

						res.setHeader('Content-Type','text/html');
						res.send(200, data);

				}
			})
		}
	}
}
