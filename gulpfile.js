require('babel-core/register');

require('./tools/build/browser-sync');
// require('./tools/build/scss');

const gulp = require('gulp');

gulp.task('default', ['server']);
