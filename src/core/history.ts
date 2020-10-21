import { BrowserHistory, createBrowserHistory } from 'history/index';

const history = process.env.BROWSER ? createBrowserHistory() : null;

export default history as BrowserHistory;
