module.exports = function(env) {
	return {
		init: function() {
			env.server.get('/dashboard', function( req, res ) {
				fs.readFile(__dirname+'/public/index.html',{encoding:'UTF-8'},function(err,data) {
					if ( !err ) {
						res.send(200, data);
					}
				});
			});
		}
	};
};
