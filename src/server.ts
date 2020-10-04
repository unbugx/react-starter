/* eslint-disable no-console */
// libs
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressRequestId from 'express-request-id';

// constants
import { PORT } from 'constants/index';

// middleware
import handleServerRendering from './server/middleware/handleServerRendering';

const addRequestId = expressRequestId();

const app = express();

// for cookie parser & sessions
const secret = 'HI&^Wugks-2';

// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
// @ts-ignore
global.navigator.userAgent = global.navigator.userAgent || 'all';

// It's a security best practice to disable x-powered-by header
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(secret));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(addRequestId);

// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', handleServerRendering);

app.use(() => {
  console.log('handle error here');
});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/`);
});
