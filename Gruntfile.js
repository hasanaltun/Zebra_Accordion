module.exports = function(grunt) {

    var source_files = ['public/javascript/zebra_accordion.src.js'];

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // configure plugins

        'uglify': {
            options: {
            },
            build: {
                src: source_files,
                dest: 'public/javascript/zebra_accordion.js'
            }
        },

        'jshint': {
            files: source_files,
            options: {
                browser: true,
                indent: false,
                quotmark: 'single',
                strict: true,
                trailing: true
            }
        },

        'watch': {
            files: source_files,
            tasks: ['jshint', 'uglify']
        }

    });

    // register plugins

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // register tasks

    grunt.registerTask('default', ['jshint', 'uglify', 'watch']);

};