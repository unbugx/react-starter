// import handleServerRendering from './server/middleware/handleServerRendering';

// libs
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressRequestId from 'express-request-id';

const port = 3030;
// routers
// import messagesRouter from './server/middleware/messages'

// middlewares
// import requestAppConfig from './server/middleware/requestAppConfig'
// import requestLanguage from './server/middleware/requestLanguage'
import handleServerRendering from './server/middleware/handleServerRendering';
// import handleInternalServerError from './server/middleware/handleInternalServerError'
// import handleLiveChatIframe from './server/middleware/handleLiveChatIframe'

// const isDev = process.env.NODE_ENV !== 'production';

// const devApiRouter = isDev ? require('./server/middleware/api').default : null
// const proxyApiRouter = isDev ? require('./server/middleware/proxy').default : null

// const apiRouter = process.env.PROXY ? proxyApiRouter : devApiRouter
const addRequestId = expressRequestId();

const app = express();

// for cookie parser & sessions
const secret = 'trampampam';

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
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

// trust proxy must be before session
// if (isDev) app.enable('trust proxy');

/*if (apiRouter) {
  app.use('/api', apiRouter)
  app.use('/images/loyalty-program', apiRouter)
}*/

app.use(addRequestId);

// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', handleServerRendering);
// app.post('*', requestAppConfig, requestLanguage, handleServerRendering)
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.use(() => {
  console.log('handle error here');
});

//
// Launch the server
// -----------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
