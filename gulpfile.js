/*
* @Author: houtianyi
* @Date:   2018-06-07 15:34:24
* @Last Modified by:   hty
* @Last Modified time: 2018-06-07 19:18:38
*/
var gulp =require("gulp");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");

//复制html
gulp.task("copyhtml",function(){
	gulp.src("*.html").pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\1802-lianxiang"));
});

//复制图片
gulp.task("copyimg",function(){
	gulp.src("img/*.jpg").pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\1802-lianxiang\\img"));
});

//压缩js
gulp.task("uglifyjs",function(){
	gulp.src("js/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\1802-lianxiang\\js"));	
});

//sass编译
gulp.task("scssfile",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\1802-lianxiang\\css"));
});

//监听
gulp.task("watchall",function(){
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("img/*.jpg",["copyimg"]);
	gulp.watch("js/*.js",["uglifyjs"]);
	gulp.watch("scss/*.scss",["scssfile"]);
});