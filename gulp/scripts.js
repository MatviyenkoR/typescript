(function() {
    'use strict';

    var concat = require('gulp-concat'),
        es = require('event-stream'),
        gulp = require('gulp'),
        gulpif = require('gulp-if'),
        fixmyjs = require('gulp-fixmyjs'),
        foreach = require('gulp-foreach'),
        jshint = require('gulp-jshint'),
        order = require('gulp-order'),
        skUtil = require('./utilities'),
        merge = require('merge-stream'),
        stylish = require('jshint-stylish'),
        sourcemaps = require('gulp-sourcemaps'),
        plumber = require('gulp-plumber'),
        uglify = require('gulp-uglify'),
        watch = require("gulp-watch"),
        tslint = require("gulp-tslint"),
        ts = require('gulp-typescript'),
        webpack = require('webpack'),
        gutil = require('gulp-util'),
        webpackConf = require('./../webpack.config');

    // ---------------------------------------------------------
    // Settings for scripts tasks

    var tasks = {

        jshint: {
            enable: false,
            input: ['gulp/**/*.js', 'app/scripts/*.js', 'app/scripts/typescript/*.ts'],
            fixSimpleIssues: false
        },

        copyScripts: {
            watch: ['app/scripts/*.js'],
            input: ['app/scripts/*.js'],
            output: 'dist/scripts/',
            concat: false, // can be `false` of filename
            uglify: false
        },

        copyTypescripts:{
          watch: ['app/scripts/typescript/**/*.ts'],
          input: ['app/scripts/typescript/**/*.ts'],
          output: 'dist/scripts/typescript',
          concat: false, // can be `false` of filename
          uglify: false
        },

        copyLibs: {
          watch: ['app/scripts/libs/**/*.js'],
          input: ['app/scripts/libs/**/*.js'],
          output: 'dist/scripts/libs/',
          concat: false, // can be `false` of filename
          uglify: false
        }

    };

    // ---------------------------------------------------------
    // Scripts tasks (generated from enabled ones from `tasks`)

    gulp.task('scripts', skUtil.tasksList(tasks));


    // ---------------------------------------------------------
    // TASK `jshint`: check javascript code quality

    gulp.task('jshint', function() {
        var task = tasks.jshint;
        return gulp.src(task.input)
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            .pipe(gulpif(task.fixSimpleIssues,
                fixmyjs(),
                foreach(function(stream, file){
                    return stream.pipe(gulp.dest( skUtil.getFileDir(file) ))
                })
            ));
    });

    // ---------------------------------------------------------
    // TASK `copyScripts`: Copy javascript files

    gulp.task('copyScripts', function(){
        var task = tasks.copyScripts;
        var stream = gulp.src(task.input)
            .pipe(plumber({errorHandler: skUtil.onError}))
            .pipe(skUtil.excludeEmptyFolders(es))
            .pipe(gulpif(task.order,
                order(task.order)
            ));

        if(task.concat) {
            stream.pipe(concat(task.concat));
        }

        if(task.uglify) {
            stream.pipe(uglify());
        }

        stream.pipe(gulp.dest(task.output));

        return merge(stream);
    });

    // ---------------------------------------------------------
    // TASK `copyScripts`: Copy typescript files

     gulp.task('tslint', function(){
       var task = tasks.copyTypescripts;
       var stream = gulp.src(task.input)
            .pipe(tslint({
                formatter: "stylish"
            }))
            .pipe(tslint.report({
              emitError: false
            }))
     });


    gulp.task('copyTypescripts',['tslint'], function(){


        // var tsProject = ts.createProject("tsconfig.json");
        // var task = tasks.copyTypescripts;
        // return tsProject.src()
        //   .pipe(tsProject())
        //   .js
        //   .pipe(gulp.dest(task.output));
        var myConfig = Object.create(webpackConf);
        webpack(myConfig, function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
              colors: true,
              progress: true
            }));
        });

    });


    // ---------------------------------------------------------
    // TASK `concatJsLibs`: copy javascript libraries

    gulp.task('copyLibs', function(){
      var task = tasks.copyLibs;
      var stream = gulp.src(task.input)
          .pipe(plumber({errorHandler: skUtil.onError}))
          .pipe(skUtil.excludeEmptyFolders(es))
          .pipe(gulpif(task.order,
              order(task.order)
          ));

      if(task.concat) {
          stream.pipe(concat(task.concat));
      }

      if(task.uglify) {
          stream.pipe(uglify());
      }

      stream.pipe(gulp.dest(task.output));

      return merge(stream);
    });


    // ---------------------------------------------------------
    // Watchers

    gulp.task('watchScripts', ['scripts'], function() {

        if ( tasks.copyScripts.enable !== false ) {
            watch(tasks.copyScripts.watch,function(){ gulp.start('copyScripts'); });
        }

        if ( tasks.copyLibs.enable !== false ) {
            watch(tasks.copyLibs.watch,function(){ gulp.start('copyLibs'); });
        }

        if ( tasks.copyTypescripts.enable !== false ) {
            watch(tasks.copyTypescripts.watch,function(){ gulp.start('copyTypescripts'); });
        }

    });


}());
