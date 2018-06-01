
"use strict";

// Register plugins
//
var 		gulp = require('gulp'),
			 del = require('del'),				 // Clean build
			sass = require('gulp-sass'),		 // Compile SASS
		 uglify = require('gulp-uglify'),	 // Minify JS
		 concat = require('gulp-concat'),  	 // Combine files into one
	sourcemaps = require('gulp-sourcemaps'); // Create CSS & JS source maps



// Register folders paths
//
var folder = {
   scss: './src/scss/**/*.scss',
    css: './assets/css',
  jsSrc: './src/js/**/*.js',
     js: './assets/js'
};


// Task for SCSS/CSS
//---------------------------------------------------------------------//

// Clean SCSS/CSS
//
gulp.task('clean-css', function () {
  return del([
    folder.css
  ]);
});


// Build SCSS/CSS
//
gulp.task('scss', ['clean-css'], function () {
	return gulp.src('./src/scss/main.scss')
		//.pipe(sourcemaps.init())
	   	.pipe(sass())
	   	.pipe(concat('style.css'))
   	///.pipe(sourcemaps.write())
   	.pipe(gulp.dest(folder.css));
});


// Task for JS
//---------------------------------------------------------------------//

// Clean JS
//
gulp.task('clean-js', function () {
  return del([
    folder.js
  ]);
});


// Build JS
//
gulp.task('js', ['clean-js'],  function() {
	return gulp.src([
			folder.jsSrc	
		])
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest(folder.js))
});


// Watch for changes
//---------------------------------------------------------------------//

gulp.task('default', ['scss', 'js']);
gulp.task('watch', function () {
   gulp.watch(folder.scss, ['scss']);
   gulp.watch(folder.jsSrc, ['js']);
});