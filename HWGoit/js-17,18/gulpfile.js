var gulp = require('gulp')
var concat = require('gulp-concat')
 
gulp.task('js', function () {
 gulp.src(['js/src/*.js'])
   .pipe(concat('concat.js'))
   .pipe(gulp.dest('js/dist/'))
})