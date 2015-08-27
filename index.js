var fs = require('fs');
module.exports = function( env ) {
	return {
		//create server here
		start: function ()
		{
			env.server.get('/home', function( req, res) {
				res.send(200, 'Hello Home');
			});
		}
	}; //return
};
