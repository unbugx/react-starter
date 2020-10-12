import { createBrowserHistory } from 'history/index';

const history: any = process.env.BROWSER ? createBrowserHistory() : null;

export default history;
