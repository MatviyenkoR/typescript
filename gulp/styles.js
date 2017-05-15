(function() {
    'use strict';

    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        merge = require('merge-stream'),
        plumber = require('gulp-plumber'),
        sourcemaps = require('gulp-sourcemaps'),
        skUtil = require('./utilities'),
        notify = require('gulp-notify'),
        watch = require('gulp-watch');


    // ---------------------------------------------------------
    // Settings for scripts tasks

    var tasks = {

        complieScss: {
            watch: ['app/styles/**/*'],
            input: ['app/styles/**/*.scss'],
            output: 'dist/css/',
            concatFilename: false,
            minimify: true,
            notify: false
        },


    };


    // ---------------------------------------------------------
    // Scripts tasks (generated from enabled ones from `tasks`)

    gulp.task('styles', skUtil.tasksList(tasks));


    // ---------------------------------------------------------
    // TASK `complieStylus`: converts fa files to css

    gulp.task('complieScss', function() {
        var task = tasks.complieScss;
        var stream = gulp.src(task.input);

        stream
            .pipe(plumber({errorHandler: skUtil.onError}))
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(task.output))

            ;

        return stream;
    });


    // ---------------------------------------------------------
    // Watchers

    gulp.task('watchStyles', function() {

        if ( tasks.complieScss.enable !== false ) {
            watch(tasks.complieScss.watch,function(){ gulp.start('complieScss'); });
        }


    });

}());
