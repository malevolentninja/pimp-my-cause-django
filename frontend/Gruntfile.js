module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //------- CSS Minify -------//
    cssmin: {
      combine: {
        files: {
          '../pimpmycause/static/styles/styles.css': ['css/styles.css']
        }
      }
    },

    //------- SASS -------//
    sass: {
      dist: {
        files: {
          'css/styles.css': 'src/sass/styles.scss'
        }
      }
    },
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: {
              '../pimpmycause/static/scripts/pimpmycause.min.js':'src/scripts/scripts.js',
            }
        }
    },

    //------- Watch SASS -> CSS -------//
    watch: {
      sass: {
        files: 'src/sass/**/**.scss',
        tasks: ['sass', 'cssmin']
      }
    },

    jspaths: {
      src: {
        js: 'src/**/**.js'
      },
      dest: {
        jsMin: '../pimpmycause/static/scripts/pimpmycause.min.js',
      }
    },

    //------- JS Minify ------//
    uglify: {
      options: {
        compress: true,
        mangle: true,
        sourceMap: true
      },
      target: {
        src: '<%= jspaths.src.js %>',
        dest: '<%= jspaths.dest.jsMin %>'
      }
    },

    //------- copy remaining static files ------//
    copy: {
      img: {
        files: [{
          expand: true,
          nonull: true,
          cwd: 'src/img',
          src: ['*.{png,jpg,jpeg,svg,gif}'],
          dest: '../pimpmycause/static/img/',
          filter: 'isFile'
        }]
      }
    }

  });

  grunt.registerTask('default', ['sass', 'cssmin', 'copy']);

};
