var gulp = require("gulp");
var tsc = require("gulp-typescript");
var del = require("del");

var tsProject = tsc.createProject("tsconfig.json");

gulp.task("build", ["cleanup"], function () {
	return gulp.src("src/**/*.ts")
		.pipe(tsProject())
		.js
		.pipe(gulp.dest("dist"));
});

gulp.task("cleanup", function () {
	return del([
		"dist"
	]);
});

gulp.task("watch", function () {
	gulp.watch("src/**/*.ts", ["build"]);
});