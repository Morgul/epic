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
        },
        watch: {
//            server: {
//                files: ['*.js', 'lib/**/*.js'],
//                tasks: ['start'],
//                options: {
//                    nospawn: true,
//                    atBegin: true
//                }
//            },
            less: {
                files: ['**/*.less'],
                tasks: ['recess'],
                options: {
                    atBegin: true
                }
            }
        }
    });

    // Grunt Tasks.
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['recess']);

    // Restart our node app whenever the code changes.
    var child;
    grunt.registerTask('start', function ()
    {
        if (child)
        {
            child.kill('SIGINT');
        } // end if

        child = grunt.util.spawn(
        {
            cmd: 'node',
            args: ['server.js']
        });

        grunt.task.run('watch:server');
    })
};
