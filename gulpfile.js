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

/* script task */
gulp.task('scripts', () => {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'src/js/main.js',
    'node_modules/jquery/dist/jquery.min.js'])
  .pipe(gulp.dest('dist/js'))
})


/* Styles task */
gulp.task('styles', () => {
  return gulp.src('src/sass/main.scss')
    .pipe(sass({includePaths: [
      path.join(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets'),
      path.join(__dirname, 'src/sass'),
      path.join(__dirname, 'node_modules/font-awesome')]
      , outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css/'))
})

/* Style login */
gulp.task('styles-layout', () => {
  return gulp.src('src/sass/layout.scss')
    .pipe(sass({includePaths: [
      path.join(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets'),
      path.join(__dirname, 'src/sass'),
      path.join(__dirname, 'node_modules/font-awesome')]
      , outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css/'))
})


/* HTML task */
gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
})

/* Assets task */
gulp.task('assets', () => {
  return gulp.src('assets/*.png')
    .pipe(gulp.dest('dist/img/'))
});

/* Font task */

gulp.task('font-awesome', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.scss', ['styles'])
  gulp.watch('src/sass/**/*.scss', ['styles-layout'])
  gulp.watch('src/**/*.html', ['html'])
  gulp.watch('assets/*.png', ['assets'], cb => cb),
  gulp.watch('src/js/**/*.js', ['scripts'])
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
  'scripts',
  'styles-layout',
  'font-awesome',
  'assets',
  'server',
  'watch'
], cb => cb)

gulp.task('deploy',[
  'html',
  'styles',
  'scripts',
  'styles-layout',
  'font-awesome',
  'assets'
], cb => cb)