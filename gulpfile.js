
"use strict";

// Register plugins
//
var 		gulp = require('gulp'),
			 del = require('del'),				  // Clean build
			sass = require('gulp-sass'),		  // Compile SASS
		 uglify = require('gulp-uglify'),	  // Minify JS
		 concat = require('gulp-concat'),  	  // Combine files into one
	sourcemaps = require('gulp-sourcemaps'), // Create CSS & JS source maps
	 svgSprite = require('gulp-svg-sprite'); // Generate SVG icons sprite	


// Register folders paths
//
var folder = {
	   scss: './src/scss/**/*.scss',
	    css: './assets/css',
	  jsSrc: './src/js/**/*.js',
	     js: './assets/js',
	 icoSrc: './src/icons/svg/*.svg',
 icoSprite: './assets/icons'
};


// Task for SCSS/CSS
//---------------------------------------------------------------------//

// Clean CSS
//
gulp.task('clean-css', function () {
	return del([
		folder.css
	]);
});


// Build CSS
//
gulp.task('scss', ['clean-css'], function () {
	return gulp.src('./src/scss/main.scss')
		.pipe(sourcemaps.init())
	   .pipe(sass().on('error', sass.logError))
	   .pipe(concat('style.css'))
   	.pipe(sourcemaps.write())
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


// Task for SVG Sprite
//---------------------------------------------------------------------// 

// SVG Sprite configuration
var svgConfig = {
	mode: {
		symbol: {
         prefix : 'icon-',
         dest : './',
         sprite : 'icons-sprite.svg'
      }
	},
	transform: [
		{ svgo: {
			plugins: [
				{ cleanupIDs: false }
			]
		}}
	],
	svg: {
		xmlDeclaration: false,
		doctypeDeclaration: false,
		namespaceIDs: true,
		namespaceClassnames: false
	}
};

gulp.task( 'icons', function() {
	gulp.src(folder.icoSrc)
		.pipe(svgSprite( svgConfig))
		.pipe(gulp.dest(folder.icoSprite));
});


// Watch for changes
//---------------------------------------------------------------------//

gulp.task('default', ['scss', 'js', 'icons']);
gulp.task('watch', function () {
   gulp.watch(folder.scss, ['scss']);
   gulp.watch(folder.jsSrc, ['js']);
});


// Commands
//---------------------------------------------------------------------
//
//	gulp 			= build solution
//	gulp watch  = watch for changes ins SCSS ans JS files
//	gulp icons 	= generate icons SVG sprite
//