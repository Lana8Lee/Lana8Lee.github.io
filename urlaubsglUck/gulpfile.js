//===================================
//          BUILD CONSTANTS
//===================================

var BUILD           = './build/';//Место хранения сборки проекта

var IMAGES_BUILD_PATH = BUILD + 'img/';
var CSS_BUILD_PATH    = BUILD + 'css/';
var JS_BUILD_PATH     = BUILD + 'js/';
var FONT_BUILD_PATH     = BUILD + 'font/';

//===================================
//         RESOURCE CONCTANTS
//===================================

var PROJECT_DIR  = './project/';

var JS_DIR       = PROJECT_DIR + 'js/';

var JADE_DIR     = PROJECT_DIR + 'jade/';
var JADE_TEMP    = JADE_DIR + 'temp/';

var JSON_DIR     = PROJECT_DIR + 'json/';

var SASS_DIR     = PROJECT_DIR + 'scss/';
var CSS_RES      = PROJECT_DIR + 'css/';

var IMG_DIR      = PROJECT_DIR + 'img/';
var SVG_DIR      = IMG_DIR + 'svg/';
var SVG_MINI     = IMG_DIR + 'svg.min/';

var FONT_DIR     = PROJECT_DIR + 'fonts/';

//===================================
//             PLUGINS
//===================================

var gulp        = require('gulp');
var jade        = require('gulp-jade');
var connect     = require('gulp-connect');
// var svgmin      = require('gulp-svgmin');
// var  imageop     = require('gulp-image-optimization'),
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
// var clean       = require('gulp-clean');
// var  cleanCSS = require('gulp-clean-css');
// var concat      = require('gulp-concat');
// var data        = require('gulp-data');
// var fs          = require('fs');
// var babel       = require('gulp-babel');
// var uglify      = require('gulp-uglify');
// var Server = require('karma').Server;
// var rjs = require('gulp-requirejs');

//===================================
//               TASKS
//===================================

gulp.task('jade', function(){
  gulp.src(JADE_DIR +'index.jade')
  .pipe(plumber())
  // .pipe(data(function(file) {
  //     return JSON.parse(fs.readFileSync(JSON_DIR + 'test-form.json'));
  //   }))
  .pipe(jade({
      pretty: true
    }))
  .pipe(gulp.dest(BUILD))
  .pipe(connect.reload());
});

gulp.task('script', function() {
  return gulp.src([JS_DIR + '**/*.js'])
  .pipe(plumber())
  // .pipe(concat('script.js', {newLine: ';'}))
  // .pipe(babel({
    // presets: ['es2015']
  // }))
  // .pipe(uglify())
  .pipe(gulp.dest(JS_BUILD_PATH))
  .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src(SASS_DIR + '/**/*.scss')
  .pipe(sass(
    // {outputStyle: 'compressed'}
  ).on('error', sass.logError))
  .pipe(autoprefixer({
			browsers: ['ie >= 8, last 2 versions'],
			cascade: false
		}))
  .pipe(gulp.dest(CSS_BUILD_PATH))
  .pipe(connect.reload());
});

//=== CONNECT ===

gulp.task('connect', function(){
  connect.server({
    port: 1337,
    root: BUILD,
    livereload: true
  });
});

//===   FILES   ===

gulp.task('watch', function(){
  gulp.watch(JADE_DIR + '**/*.jade', function(){gulp.run('jade');});
  // gulp.watch(JADE_DIR + '**/*.html', function(){gulp.run('jade');});
  // gulp.watch(JSON_DIR + '**/*.json', function(){gulp.run('jade');});
 gulp.watch(SASS_DIR + '**/*.scss', function(){gulp.run('sass');});
  gulp.watch(JS_DIR + '**/*.js', function(){gulp.run('script');});
});

//===================================
//           DEFAULT TASK
//===================================
gulp.task('default', function(){
  gulp.run('jade', 'sass', 'script', 'watch', 'connect');
});
