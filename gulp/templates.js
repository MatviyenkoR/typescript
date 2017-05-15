(function() {
    'use strict';

    var gulp = require('gulp'),
        browserSync = require('browser-sync'),
        reload = browserSync.reload,
        plumber = require('gulp-plumber'),
        skUtil = require('./utilities'),
        watch = require('gulp-watch');


    // ---------------------------------------------------------
    // Settings for scripts tasks

    var tasks = {

        copyHtml: {
            watch: ['app/templates/**/*.html'],
            input: ['app/templates/*.html'],
            baseDir: '/app/templates/',
            output: 'dist/',
            prettify: true
        },


    };

    // ---------------------------------------------------------
    // Scripts tasks (generated from enabled ones from `tasks`)

    gulp.task('templates', skUtil.tasksList(tasks));


    // ---------------------------------------------------------
    // TASK `compileJade`: converts jade files to html

    gulp.task('copyHtml', function() {
        var task = tasks.copyHtml;
        return gulp.src(task.input)
          .pipe(plumber({errorHandler: skUtil.onError}))
          .pipe(gulp.dest(task.output))
          .pipe(reload({ stream:true }));
    });


    // ---------------------------------------------------------
    // Watchers

    gulp.task('watchTemplates', function() {

        if ( tasks.copyHtml.enable !== false ) {
            watch(tasks.copyHtml.watch,function(){ gulp.start('copyHtml'); });
        }


    });


}());
