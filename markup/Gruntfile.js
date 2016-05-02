module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    includes: {

			main:{
				cwd:'html_src/main',
				src: ['*.html'],
				dest: 'html/main',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			guide: {
				cwd:'html_src/_guide',
				src: ['*.html'],
				dest: 'html/_guide',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			info: {
				cwd:'html_src/info',
				src: ['*.html'],
				dest: 'html/info',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			join: {
				cwd:'html_src/join',
				src: ['*.html'],
				dest: 'html/join',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			my: {
				cwd:'html_src/my',
				src: ['*.html'],
				dest: 'html/my',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			benefit: {
				cwd:'html_src/benefit',
				src: ['*.html'],
				dest: 'html/benefit',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

      double: {
        cwd:'html_src/double',
        src: ['*.html'],
        dest: 'html/double',
        options: {
          flatten:true,
          includePath: 'html_src/_include'
        }
      },

      vip: {
        cwd:'html_src/vip',
        src: ['*.html'],
        dest: 'html/vip',
        options: {
          flatten:true,
          includePath: 'html_src/_include'
        }
      }

    },

    concat: {
    	dist: {
    		src: ['js_src/*.js'],
    		dest: 'js/function.js'
    	}
    },

    sass:{
    	dist: {
    		options: {
    			sourcemap: 'auto',
    			style: 'expanded'
    		},
    		files: [{
    			expand: true,
    			cwd: 'css_scss',
    			src: ['*.scss'],
    			dest: 'css/',
    			ext: '.css'
    		}]
    	}
    },

    connect: {
      server: {
        options: {
          port: 8011,
          hostname: 'localhost',
          base: '.',
          livereload: true,
          open: {
            server: {
              path: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>'
            }
          }
        }
      }
    },

    copy: {

			list:{
        files:[{
          expand: true,
          cwd: 'html_src/',
          src: ['list.html'],
          dest: 'html/'
        }]
			},

    	jsLib: {
    		files:[{
    			expand: true,
    			cwd: 'js_src/lib/',
    			src: ['jquery.mobile.min.js', 'jquery-1.11.0.min.js', 'jquery-1.11.0.min.map', 'jquery-ui.min.js'],
    			dest: 'js/lib/'
    		}]
    	},

    	// output
    	html: {
				files:[{
					expand: true,
					cwd: 'html/',
					src: ['**', '!**/@tmp.*'],
					dest: '_output/html/'
				}]
    	},

    	js: {
        files:[{
          expand: true,
          cwd: 'js/',
          src: ['**'],
          dest: '_output/js/'
        }]
    	},

    	css: {
				files:[{
					expand: true,
					cwd: 'css/',
					src: ['**', '!*.map'],
					dest: '_output/css/',
				}],
				options:{
					process: function(content){
						return content.replace('/*# sourceMappingURL=biz_membership.css.map */', '');
					}
				}
    	},

    	images: {
    		expand: true,
    		src:'smart/**',
    		dest:'_output/'
    	}

    },

    watch: {

    	js: {
    		files: ['js_src/*.js'],
    		tasks: ['concat:dist','copy', 'reload'],
    		options: {
      		livereload : true
      	}
    	},

    	html: {
    		files: ['html_src/**'],
    		tasks: ['includes','copy', 'reload'],
    		options: {
      		livereload : true
      	}
    	},

    	css: {
    		files: ['css_scss/**'],
    		tasks: ['sass','copy', 'reload'],
    		options: {
      		livereload : true
      	}
    	}

    },

    reload: {
    	port: 8011
    }

  });

  grunt.registerTask('default',function(){
  	grunt.log.writeln('Grunt Start...');
  	grunt.task.run([
  		'includes',
  		'concat',
  		'sass',
			'copy',
  		'connect',
  		'watch'
  	]);
  });

  grunt.registerTask('export', function(){
	  grunt.task.run([
		  'includes',
		  'concat',
		  'sass',
		  'copy'
	  ]);
  });

};
