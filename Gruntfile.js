//----------------------------------------------------------------------------------------------------------------------
// EPIC Gruntfile.
//----------------------------------------------------------------------------------------------------------------------

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        recess: {
            options: {
                compile: true
            },
            epic: {
                files: {
                    'static/css/epic.css': ['less/epic.less']
                }
            },
            min: {
                options: {
                    compress: true
                },
                files: {
                    'static/css/epic.min.css': ['less/epic.less']
                }
            }
        }
    });

    // Grunt Tasks.
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['recess']);
};
