var fs, restify;

fs = require('fs');
restify = require('restify');

module.exports = function( env ) {
	return {
		//create server here
		env.server.get('/params', function( req, res, next ) {
			res.send(200,'Hello Happy');
			next();
		}

	}
};
