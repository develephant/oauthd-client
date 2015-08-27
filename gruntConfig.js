'use strict';

module.exports = function(gruntConf) {

	gruntConf.coffee['default_client'] = {
		expand: true,
		cwd: __dirname,
		src: ['*.coffee'],
		dest: __dirname + '/bin',
		ext: '.js',
		options: {
			bare: true
		}
	};

	gruntConf.watch['default_client'] = {
		files: [
			__dirname + '/**/*.coffee'
		],
		tasks: ['coffee:default_client']
	};

	gruntConf.watch['client'] = {
		files: [
			__dirname + '/**/*.coffee',
			__dirname + '/public/**/*'
		],
		tasks: ['subgrunt:client']
	};

	return function() {

	}
}
