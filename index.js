var fs = require('fs');
module.exports = function(env) {
	return {
		init: function() {
			env.server.get('/dashboard', function( req, res, next ) {
				fs.readFile(__dirname+'/public/index.html',{encoding:'UTC-8'},function(err,data) {
					if ( !err ) {
						res.setHeader('Content-Type','text/html');
						res.send(200, data);
					}
				}
			}),
			env.server.get(/^(\/.*)/, function( req, res, next ) {
				if (req.params[0] === '/') {
		      res.setHeader('Location', '/dashboard');
		      res.send(302);
				} else { //check for static file
					fs.stat(__dirname+'/public'+req.params[0], function(err,stats) {
						if ( !err ) {
							if (stats.isFile() === true ) {
								fs.readFile(__dirname+'/public'+req.params[0],{encoding:'UTC-8'},function(err,data) {
									if ( !err ) {
										res.send(200, data);
									}
								});
							}
						}
					});
				}
			});
		}
	}
}
