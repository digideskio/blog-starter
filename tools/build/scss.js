const gulp = require('gulp');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

const uglify = require('gulp-uglify');

const argv = require('yargs').argv;
const production = !!(argv.production);

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemap = require('gulp-sourcemaps');
const minifycss = require('gulp-minify-css');

const browserSync = require('browser-sync');
const reload = browserSync.reload;

const SRC = 'src/scss/style.scss';
const DEST = 'public/css/';

gulp.task('sass', function () {
    return gulp.src(SRC)
        // .pipe(gulpif(!production, reload({stream:true})))
        .pipe(gulpif(!production, changed(DEST, {extension: '.scss'})))
        .pipe(plumber())
        .pipe(gulpif(!production, sourcemap.init()))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())        
        .pipe(gulpif(!production, sourcemap.write()))
        .pipe(gulpif(production, minifycss()))
        .pipe(gulp.dest(DEST))
        .pipe(reload({stream:true}));
});