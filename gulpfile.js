/////////////////////////////////////////////////////
// Gulp Dependencies
/////////////////////////////////////////////////////

var gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	jade = require('gulp-jade'),
	sass = require("gulp-sass"),
	concat = require("gulp-concat"),
	fs = require('fs'),
	uglify = require("gulp-uglify"),
	cleanCSS = require('gulp-clean-css');

/////////////////////////////////////////////////////
// HTML
/////////////////////////////////////////////////////

gulp.task("jade", function() {
	gulp.src('views/**/!(_)*.jade')
	.pipe(jade({
		pretty: true,
		locals: {
			moment: require("moment"),
			categories: JSON.parse( fs.readFileSync('./views/_categories.json') ),
			links: JSON.parse( fs.readFileSync('./views/_links.json') ),
		}
	}))
	.pipe(gulp.dest("./"));
});

/////////////////////////////////////////////////////
// SASS
/////////////////////////////////////////////////////

gulp.task('sass', function () {
	gulp.src(['public/css/styles.scss'])
		.pipe(sass({
			outputStyle: "compact",
		}).on('error', sass.logError))
		.pipe(autoprefixer({browsers: ['last 2 versions'], remove: false}))
		.pipe(gulp.dest(function(file) {
			return file.base;
		}));
	});

/////////////////////////////////////////////////////
// JavaScript
/////////////////////////////////////////////////////

gulp.task("uglify", function() {
	gulp.src(["public/js/vendor/*.js", "public/js/components/*.js"])
	.pipe(concat("application.js"))
	.pipe(gulp.dest("public/js/"));
});

/////////////////////////////////////////////////////
// Watch
/////////////////////////////////////////////////////

gulp.task("watch", function() {
	gulp.watch(['public/css/**/*.scss'], ['sass']);
	gulp.watch(['public/js/**/*.js'], ['uglify']);
	gulp.watch(['views/**/*.jade'], ['jade']);
});

gulp.task("default", ["watch"], function() {

});
