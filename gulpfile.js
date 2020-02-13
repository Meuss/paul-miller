// =====================================================
// Gulp 4: Browser sync and sass compiling
// =====================================================
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function style() {
  return gulp
    .src('style.scss')
    .pipe(autoprefixer('>1%', 'last 2 versions', 'ie 11'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}
function watch() {
  browserSync.init({
    server: {
      baseDir: './',
      index: '/index.html',
    },
  });

  gulp.watch('./style.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;
