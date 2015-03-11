module.exports = function(grunt) {

  // PROJECT CONFIGURATION
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
     // COPY TASKS /////////////
    copy: {
      dist: {
        files: {
          '../dist/soma.css': '../src/soma.css'
        }
      }
    },
    // CSSMIN TASKS ///////////
    cssmin: {
      minify: {
        files: {
          '../dist/soma.min.css': '../dist/soma.css'
        }        
      },
      combine: {
        files: {
          '../dist/soma.demo.css': ['../src/bones.min.css','../src/flesh.min.css','../dist/soma.min.css']
        }
      }
    },
    // UGLIFY TASKS ///////////
    uglify: {
      dist: {
        options: {
          mangle: false
        },
        files: {
          '../dist/soma.min.js': ['../src/jquery.particleground.min.js','../src/soma.js']
        }
      }
    },
    // PROCESSHTML TASKS //////
    processhtml: {
      dist: {
        files: { 
          '../dist/index.html': '../src/index.html'
        }
      }
    }
  });

  // LOAD PLUGINS
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');

  // DEFAULT TASKS
  grunt.registerTask('default', ['copy','cssmin','uglify','processhtml']);
};