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

			brp_guide: {
				cwd:'html_src/brp_guide',
				src: ['*.html'],
				dest: 'html/brp_guide',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			brp_join: {
				cwd:'html_src/brp_join',
				src: ['*.html'],
				dest: 'html/brp_join',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			brp_my: {
				cwd:'html_src/brp_my',
				src: ['*.html'],
				dest: 'html/brp_my',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			discount_alliance: {
				cwd:'html_src/discount_alliance',
				src: ['*.html'],
				dest: 'html/discount_alliance',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

			discount_comm: {
				cwd:'html_src/discount_comm',
				src: ['*.html'],
				dest: 'html/discount_comm',
				options: {
					flatten:true,
					includePath: 'html_src/_include'
				}
			},

      discount_double: {
        cwd:'html_src/discount_double',
        src: ['*.html'],
        dest: 'html/discount_double',
        options: {
          flatten:true,
          includePath: 'html_src/_include'
        }
      },

      discount_terminal: {
        cwd:'html_src/discount_terminal',
        src: ['*.html'],
        dest: 'html/discount_terminal',
        options: {
          flatten:true,
          includePath: 'html_src/_include'
        }
      },

      vip_choice: {
        cwd:'html_src/vip_choice',
        src: ['*.html'],
        dest: 'html/vip_choice',
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

    	jsLib: {
    		files:[{
    			expand: true,
    			cwd: 'js_src/lib/',
    			src: ['jquery-1.11.0.min.js', 'jquery-1.11.0.min.map', 'jquery-ui.min.js', 'jquery.slides.min.js'],
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
          options:{
            process: function(content){
              return content.replace('/*# sourceMappingURL=biz_membership.css.map */', '');
            }
          }
				}]
    	},

    	images: {
    		expand: true,
    		src:'images/**',
    		dest:'_output/'
    	}

    },

    watch: {

    	js: {
    		files: ['js_src/*.js'],
    		tasks: ['concat:dist', 'reload'],
    		options: {
      		livereload : true
      	}
    	},

    	html: {
    		files: ['html_src/**'],
    		tasks: ['includes', 'reload'],
    		options: {
      		livereload : true
      	}
    	},

    	css: {
    		files: ['css_scss/**'],
    		tasks: ['sass', 'reload'],
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
  		//'copy:jsLib',
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
