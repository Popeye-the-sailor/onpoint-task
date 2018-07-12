'use strict'

var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require('gulp-sass'),
		csso = require('gulp-csso');
 
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('src/scss/style.scss')
		.pipe(sass())
		.pipe(csso({
			restructure: false,
      sourceMap: true,
      debug: true
					}))
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.stream());
})

gulp.task('default', ['serve']);