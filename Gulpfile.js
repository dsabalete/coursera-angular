'use strict';

    var glup = require('gulp'),
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
        del = require("del");
    // gulp-load-plugins can also be used to load all plugins specified in package.json

module.exports = function(gulp) {
    
    gulp.task('jshint', function() {
        gulp.src('app/scripts/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });
    
    gulp.task('imagemin', function() {
        return gulp.src('app/images/**/*')
            .pipe(cache(imagemin({optimizationLevel: 3, progressive:true, interlaced: true})))
            .pipe(gulp.dest('dist/images'))
            .pipe(notify({message:'Images task complete'}));
    });
    
    
};