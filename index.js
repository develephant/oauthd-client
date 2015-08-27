var fs, restify;

fs = require('fs');
restify = require('restify');

module.exports = function( env ) {
	return {
		//create server here
		init: function ()
		{
			env.server.get(/^\/(.*)/, function( req, res, next ) {
				var params;
				if (req.params[0].length > 0 ) {
					params = req.params[0];
				}

				res.send(200, params);


			});



			// env.server.get('/home', function( req, res, next ) {
			// 	fs.readFile(__dirname+'/public/index.html', function( err, data ) {
			// 		if ( !err ) {
			// 			res.setHeader('Content-Type','text/html');
			// 			res.send(200, data);
			// 		} else {
			// 			next();
			// 		}
			// 	});
			// });
			//
			// env.server.get(/^\/(.*)/, restify.serveStatic({
			// 	directory: __dirname + '/public',
	    //   default: __dirname + '/public/index.html'
			// }));
		}
	}; //return
};
