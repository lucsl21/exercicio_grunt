module.exports = function (grunt) {

    grunt.initConfig({
      less: {
        development: {
          files: {
            "dist/style.css": "src/style.less" 
          }
        }
      },
      uglify: {
        options: {
          mangle: false
        },
        build: {
          files: {
            'dist/app.min.js': ['src/app.js'] 
          }
        }
      }
    });
  
 
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  };
  