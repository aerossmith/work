var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require("opn");
		//Запуск localhost
	gulp.task('connect', function() {
  	connect.server({
    root: 'app',
    port: '8888',
    livereload: true
  });
  	opn('http://localhost:8888');
});
//Работа с HTML
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
//Работа с CSS
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});
//Работа с JS
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});
//Слежка
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/js/*.js'], ['js']);
});
//Задачи по умолчанию
gulp.task('default', ['connect', 'watch']);