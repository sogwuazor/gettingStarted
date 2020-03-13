module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*Start the backend server*/
		shell: {
			connect: {
				command: 'node server.js'
			}
		},

		/*Start the front end*/
		concurrent: {
			target: {}
		},

		/*handlebars compilation*/
		handlebars: {
			compile: {
				options: {
					namespace: 'HBS',
					processName: function(filepath) {
						filepath = filepath.replace(/^\/?web\//, '');
						filepath = filepath.replace('.hbs', '');
						return filepath;
					},
					amd: true
				},
				files: (function() {
					let files = {};

					files['web/templates/handlebars-compiled.js'] = ['web/**/*.hbs'];
					return files;
				}())
			}
		},
		watch: {
			js: {
				files: ['web/**/**/*.js', 'web/**/*.js'],
				options: {
					livereload: {
						host: 'localhost',
						port: 3000
					},
					spawn: false
				}
			},
			css: {
				files: ['web/**/**/*.css', 'web/**/*.css', '*.css']
			},
			hbs: {
				files: ['web/**/**/*.hbs'],
				tasks: ['handlebars']
			}
		}
	});
	// load grunt tasks
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');

	/*register tasks*/
	grunt.registerTask('concurrent', ['concurrent']);
	grunt.registerTask('runbackend', ['shell:connect']);
	grunt.registerTask('server', 'Start the web server and watch tasks', ['handlebars', 'watch']);
	grunt.registerTask('default', function() {
		grunt.task.run('handlebars');
		grunt.task.run('shell:connect');
		grunt.task.run('watch');
	});
};
