var fs = require('fs');
module.exports = function(env) {
	//create server here
	env.server.get('/home', function( req, res ) {
		fs.readFile(__dirname+'/public/index.html', function( err, data ) {
			//env.debug( err );
			//res.setHeader('Content-Type', 'text/html');
			res.send(200, 'Yolo');
		});
	});
};
