/* Gulpfile.js */
let gulp = require('gulp')
let gutil =  require('gulp-util')
let sass = require('gulp-sass')
let webserver = require('gulp-webserver');
let path = require('path')
let stylelint   = require('stylelint');

/* tasks */
// gulp.task(
//   name : String,
//   deps : [] :: optional,
//   cb : fn
// )

//gulp.task('lint', () => {
//  return gulp.src('src/sass/**/*.scss')
  //  .pipe()
//});

/* Styles task */
gulp.task('styles', () => {
  return gulp.src('src/sass/main.scss')
    .pipe(sass({includePaths: [
      path.join(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets'),
      path.join(__dirname, 'src/sass')]
      , outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css/'))
     gulp.start('lint');
})

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
})

gulp.task('assets', () => {
  return gulp.src('assets/*.png').pipe(gulp.dest('dist/img/'))
});

gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.scss', ['styles'])
  gulp.watch('src/**/*.html', ['html'])
  gulp.watch('assets/*.png', ['assets'], cb => cb)
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
  'assets',
  'server',
  'watch'
], cb => cb)