const PATH = require("path");
const FS = require("fs");

const _ = require('lodash');

const gulp = require('gulp');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

const argv = require('yargs').argv;
const production = !!(argv.production);

const markdown = require('../plugins/markdown');

const SRC = 'src/markdown/**/*.md';
const DEST = 'public/';

const options = {
    publicRoot: 'public/',
    root: 'src/templates/',
    layouts: {
        article: 'layouts/article.hbs',                    
        proposal: 'layouts/proposal.hbs',                    
        page: 'layouts/page.hbs',                    
        index: 'layouts/index.hbs',                    
    },
    partials: {
        head: 'partials/head.hbs',
        content: 'partials/content.hbs',
        menu: 'partials/menu.hbs',
        articles: 'partials/articles.hbs',
        js: 'partials/js.hbs'
    }    
};

gulp.task('markdown', function() {
    return gulp.src(SRC)
        .pipe(gulpif(!production, changed(DEST, {extension: '.html'})))
        .pipe(plumber())
        .pipe(markdown(options))
        .pipe(gulp.dest(DEST));
});

gulp.task('hbs', function() {
    return gulp.src(SRC)
        .pipe(plumber())
        .pipe(markdown(options))
        .pipe(gulp.dest(DEST));
});
