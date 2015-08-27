module.exports = function(env) {
	return {
		init: function() {
			env.server.get('/hello', function( req, res ) {
				res.send(200, 'Hello World');
			});
		}
	};
};
