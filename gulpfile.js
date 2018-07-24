/* Gulpfile.js */
let gulp = require('gulp')
let gutil =  require('gulp-util')
let sass = require('gulp-sass')
let webserver = require('gulp-webserver');
let path = require('path')

/* tasks */
// gulp.task(
//   name : String,
//   deps : [] :: optional,
//   cb : fn
// )

/* Styles task */
gulp.task('styles', () => {
  return gulp.src('src/sass/main.scss')
    .pipe(sass({includePaths: [
      path.join(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets'),
      path.join(__dirname, 'src/sass')]
      , outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
})

gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.scss', ['styles'])
  gulp.watch('src/**/*.html', ['html'])
})

gulp.task('server', () => {
  gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
})

gulp.task('build', [
  'html',
  'styles',
  'server',
  'watch'
], cb => cb)