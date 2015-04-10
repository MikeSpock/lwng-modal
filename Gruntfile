module.exports = function(grunt) {

grunt.initConfig({
    uglify: {
         options: {
            mangle: {}
         },
         my_target: {
            files: {
                'dist/lwng-modal.min.js': ['src/lwng-modal.js']
            }
         }
    },
     release: {
        options: {
          file: 'bower.json',
          github: {
            repo: 'MikeSpock/lwng-modalgeddski', //put your user/repo here
            usernameVar: 'GITHUB_USERNAME', //ENVIRONMENT VARIABLE that contains Github username
            passwordVar: 'GITHUB_PASSWORD' //ENVIRONMENT VARIABLE that contains Github password
          }
        }
      }
});

  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify','release']);
  grunt.registerTask('minify', ['uglify']);

};
