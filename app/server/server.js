import PATH from 'path';

import express from 'express';
import morgan from 'morgan';
import compression from 'compression';

const app = express();

const ROOT = '../../';

const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 10000;

const PUBLIC_FOLDER = PATH.resolve(__dirname, ROOT, 'app/client/public/');

app.use(morgan('dev'));
app.use(compression({threshhold: 512}));
app.set('x-powered-by', false);

// app.use('/assets', express.static(PATH.resolve(__dirname, ROOT, 'app/client/public/assets')));
app.use(express.static(PUBLIC_FOLDER));

app.listen(PORT, () => {
    console.log(`Listening on ${PROTOCOL}://${HOST}:${PORT}`);    
});
