var fs = require('fs');
module.exports = function(env) {
	return {
		init: function() {
			env.server.get(/^(\/.*)/, function( req, res, next ) {

				//Check for file
				fs.stat(__dirname + '/public' + req.params[0], function( err, stats ) {
					if ( err || ( stats.isFile() === false ) ) {
						next();
					} else { //no error - serve up index
						fs.readFile(__dirname+'/public/index.html', {encoding: 'UTC-8'}, function(err, data) {
							if (!err) {
								res.setHeader('Content-Type', 'text/html');
								res.send(200, data);
							}
						});
					}
				});
			}
		}
	}
};
