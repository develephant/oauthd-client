var fs, restify;

fs = require('fs');
restify = require('restify');

module.exports = function( env ) {
	return {
		//create server here
		init: function ()
		{
			env.server.get(/^(\/.*)/, function( req, res, next ) {
				var params;
				if (req.params[0].length > 0 ) {
					params = req.params[0];
				}

				if ( params === '/') {
					res.setHeader('Location','/client');
					res.send(302);
				}

				fs.stat(__dirname+'/public'+params, function( err, stat ) {
					if ( !err ) {
						if ( stat.isFile() === true ) {
							fs.readFile(__dirname+'/public/'+params, {encoding: 'UTF-8'}, function( err, data) {
								if ( !err ) {
									res.send(200, data);
								} else {
									next();
								}
							})
						} else {
							next();
						}
					} else {
						next();
					}
				})
			});
		}, restify.serveStatic({
			directory: __dirname + '/public',
			default: __dirname + '/public/index.html'
		});
	}; //return
};
