const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
    // grab scss file
    return gulp.src('./scss/**/*.scss')
    // pass file through sass compiler
    .pipe(sass().on('error', sass.logError))
    //save compiled css
    .pipe(gulp.dest('./css'))
    //stream changes to browers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;