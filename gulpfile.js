var gulp = require('gulp');
var del = require('del');
var install = require('gulp-install');

gulp.task('foo0x', function() {
  gulp.src(['foo0*/package.json'])
    .pipe(install());
});

gulp.task('foo1x', function() {
  gulp.src(['foo1*/package.json'])
    .pipe(install());
});

gulp.task('foox', function() {
  gulp.src(['foo*/package.json'])
    .pipe(install());
});

gulp.task('clean', function() {
  return del('*/node_modules');
});

gulp.task('works', ['foo0x', 'foo1x']);
gulp.task('broken', ['foox']);

gulp.task('default', ['broken']);

