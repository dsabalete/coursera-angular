'use strict';

var gulp = require('gulp'),
    jshint = require("gulp-jshint"),
    stylish = require("jshint-stylish"),
    minifycss = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    usemin = require("gulp-usemin"),
    imagemin = require("gulp-imagemin"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    notify = require("gulp-notify"),
    cache = require("gulp-cache"),
    changed = require("gulp-changed"),
    rev = require("gulp-rev"),
    browserSync = require("browser-sync"),
    ngannotate = require("gulp-ng-annotate"),
    del = require("del");
// gulp-load-plugins can also be used to load all plugins specified in package.json

// notify with a reporter is needed in order to prevent errors with notify-send
var customNotify = notify.withReporter(function (options, callback) {
    callback();
});

gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('usemin', ['jshint'], function() {
    return gulp.src('./app/**/*.html')
        .pipe(usemin({
            css: [minifycss(), rev()],
            js: [ngannotate(), uglify(), rev()] 
        }))
        .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('imagemin', function() {
    return del(['dist/images']), gulp.src('app/images/**/*')
        .pipe(cache(imagemin({optimizationLevel: 3, progressive:true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        //.pipe(notify({message: 'Images task complete' }));
        .pipe(customNotify('Images task complete'));
});

gulp.task('copyfonts', ['clean'], function() {
    gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./dist/fonts'));
});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
    
    // Watch js files
    gulp.watch('{app/scripts/**/*.js,app/styles/**.*.css,app/**/*.html}',['usemin']); 
    
    // Watch image files
    gulp.watch('app/images/**/*',['imagemin']);
    
});

gulp.task('browser-sync', ['default'], function() {
    var files = [
        'app/**/*.html',
        'app/styles/**/*.css',
        'app/images/**/*.png',
        'app/scripts/**/*.js',
        'dist/**/*'
    ]; 
    
    browserSync.init(files, {
        server: {
            baseDir: 'dist', 
            index: 'index.html'
        },
        port: process.env.PORT
    });
    
    // Watch any files in dis/, reload on cheange
    gulp.watch(['dist/**']).on('change', browserSync.reload);
    
});


// default task
gulp.task('default', ['clean'], function() {
    gulp.start('usemin', 'imagemin', 'copyfonts'); 
    
});