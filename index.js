var fs, restify;

fs = require('fs');
restify = require('restify');

module.exports = function( env ) {
	return {
		//create server here
		init: function ()
		{
			env.server.get(/^(\/.*)/, function( req, res ) {
				res.send(200, req.params[0]);
			}
		}
	}
};
