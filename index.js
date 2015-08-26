module.exports = function(env) {
	return {
		init: function() {
			env.server.get('/client', function( req, res ) {
				res.json(200, 'Hello Client');
			});
		}
	};
};
