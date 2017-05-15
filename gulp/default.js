(function() {
    'use strict';

    require('./images');
    require('./scripts');
    require('./styles');
    require('./templates');

    var gulp = require('gulp'),
        del = require('del'),
        browserSync = require('browser-sync'),
        runSequence = require('run-sequence');



    // ---------------------------------------------------------
    // Clean `dist`

    gulp.task('clean', function() {
        return del(['dist']);
    });


    // ---------------------------------------------------------
    // Running server on free port

    gulp.task('serve', function() {
        browserSync({
            port: 3004,
            ui: {
                port: 3005
            },
            server: {
                baseDir: 'dist',
                directory: true
            }
        });
    });



    gulp.task('build', function (cb) {
        runSequence(
          [
                'images',
                'scripts',
                'styles'
            ],
            ['templates'],
            ['serve'],
            cb);
    });



    // ---------------------------------------------------------
    // Watch app

    gulp.task('watch', [
        'watchImages',
        'watchScripts',
        'watchStyles',
        'watchTemplates'
    ]);


    // ---------------------------------------------------------
    // Run default task

    gulp.task('default', function (cb) {
        runSequence(
          ['clean'],
          ['build'],
          ['watch'],
            cb);
    });

}());
