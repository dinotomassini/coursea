module.exports = function (grunt){

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    watch: {
      files: ['css/*.scss'],
      task: ['css']
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*.css',
            '*.html',
            'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './' //Directorio base para el servidor
          }
        }
      }
    },

    imagemin: {
      dinamic: {
        files: [{
          expand: true,
          cwd: './',
          src: 'img/*.{png, gif, jpg, jpeg, webp}',
          dest: 'dist/'
        }]
      }
    },

    copy: {
      html: {
        files: [{
          expand: true,
          dot: true,
          cwd: './',
          src: '*.html',
          dest: 'dist'
        }]
      },
      fonts: {
        files: [{
          //para openiconic
          expand: true,
          dot: true,
          cwd: 'node_modules/open-iconic/font',
          src: ['fonts/*.*'],
          dest: 'dist'
        }]
      }
    },

    clean: {
      build: {
        src: ['dist/']
      }
    },

    cssmin: {
      dist: {}
    },

    uglify: {
      dist: {}
    },

    filerev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 20
      },

      release: {
        files: [{
          src: [
            'dist/js/*.js',
            'dist/css/*.css'
          ]
        }]
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {}
    },

    useminPrepare: {
      foo: {
        dest: 'dist',
        src: ['index.html', 'acerca.html', 'contacto.html', 'productos.html']
      },
      options: {
        flow: {
          steps: {
            css: ['cssmin'],
            js: ['uglify']
          },
          post: {
            css: [{
              name: 'cssmin',
              createConfig: function(context, block) {
                var generated = context.options.generated;
                generated.options = {
                  keepSpecialComments: 0,
                  rebase: false
                }
              }
            }]
          }
        }
      }
    },

    usemin: {
      html: [
        'dist/index.html', 
        'dist/acerca.html', 
        'dist/contacto.html', 
        'dist/productos.html',
      ],
      options: {
        assetsDir: ['dist', 'dist/css', 'dist/js']
      }
    }

  });

  // PLUGIN WATCH
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // PLUGIN SASS
  // grunt.loadNpmTasks('grunt-contrib-sass');
  // PLUGIN BROWSER-SYNC
  // grunt.loadNpmTasks('grunt-browser-sync');
  // PLUGIN IMAGEMIN
  // grunt.loadNpmTasks('grunt-contrib-imagemin');

  // TAREAS
  //('nombre_tarea, el_sass_del_initConfig')

  // TAREA DEFAULT
  grunt.registerTask('default', ['browserSync', 'watch']);

  // TAREA SASS
  grunt.registerTask('css', ['sass']);

  // TAREA IMAGEMIN
  grunt.registerTask('img:compress',['imagemin']);

  // TAREA BUILD
  grunt.registerTask('build', [
    'clean',
    'copy',
    'imagemin',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin'
  ]);

};