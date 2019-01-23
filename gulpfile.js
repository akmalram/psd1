const gulp = require('gulp');
const concat = require('gulp-concat');
const preproc = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

preproc.compiler = require('node-sass');


// task init

gulp.task('css', css);
gulp.task('js', js);
gulp.task('watch', watch);
gulp.task('default', gulp.series('css', 'js','watch'));

// gulp watcher

function watch() {
    
    browserSync.init({
        server: {
            baseDir: "./build/"
        },
        tunnel: true
    });
    
    gulp.watch('./src/css/**/*.scss', css);
    gulp.watch('./src/js/**/*.js', js);
    gulp.watch('./build/*.html', browserSync.reload);
}

// task functions

function js() {
    return gulp.src('./src/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.stream());
}
function css() {
    return gulp.src('./src/css/**/*.scss')
        .pipe(preproc())
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCss({
            level: 2
        }))
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream());
            
}