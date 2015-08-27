var fs = require('fs');
module.exports = function( env ) {
	return {
		//create server here
		init: function ()
		{
			env.server.get('/home', function( req, res) {
				fs.readFile(__dirname+'/public/index.html', function( err, data ) {
					res.setHeader('Content-Type','text/html');
					res.send(200, data);
				});
			});
		}
	}; //return
};
