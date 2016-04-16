module.exports = function( grunt ) {

    'use strict';

    grunt.config( 'jshint', {
        dev:{
            options: {
                reporter: require('jshint-html-reporter'),
                reporterOutput: 'views/dev-jshint-report.html',
                force:true
            },
            files: {
                src:['public/js/*.js', '!public/js/sf.preinit.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
