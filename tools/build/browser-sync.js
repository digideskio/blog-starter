import PATH from 'path';

import gulp from 'gulp';
import browserSync from 'browser-sync';

const ROOT = '../../';

const DEFAULT_PORT = 10001;

const PUBLIC_FOLDER = PATH.resolve(__dirname, ROOT, 'app/client/public/');

gulp.task('server', function() {
    browserSync({
        port: DEFAULT_PORT,
        browser: [],
        notify: false,
        online: false,
        logConnections: true,
        files: [
            PUBLIC_FOLDER
        ],
        proxy: 'http://localhost:10000'
    });

    browserSync.reload();
});