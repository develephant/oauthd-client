var fs, restify;

fs = require('fs');
restify = require('restify');

module.exports = function( env ) {
	return {
		//create server here
		env.server.get('/params/^(\/.*)/', function( req, res ) {
			res.send(200, req.params[0]);
		}
			// env.server.get(/^(\/.*)/, function( req, res ) {
			// 	res.send(200, req.params[0]);
			// }
	}
};
