var fs = require('fs');
module.exports = function(env) {
	return {
		init: function() {
			env.server.get(/^(\/.*)/, function( req, res, next ) {
				//redirect to dashboard
				// if (req.params[0] === '/') {
				// 	res.setHeader('Location', '/dashboard');
				// 	res.send(302);
				// }

				//Check for file
				fs.stat(__dirname + '/public' + req.params[0],
				function( err, stats ) {
					if ( err || ( stats.isFile() === false ) ) {
						next();
					} else { //no error
						fs.readFile((__dirname+'/public/index.html',
						{ encoding: 'UTF-8' },
						function( err, data) {
							if ( !err ) {
								res.setHeader('Content-Type', 'text/html');
								res.send(200, data);
							}
						}));
					}
				});
			});
		}
	};
};
