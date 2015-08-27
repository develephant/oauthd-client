var fs = require('fs');
module.exports = function(env) {
	//create server here
	env.server.get('/home', function( err, data ) {
		env.debug( err );
		fs.readFile(__dirname+'/public/index.html', function( err, data ) {
			res.setHeader('Content-Type', 'text/html');
			res.send(200, data);
		});
	});
};
