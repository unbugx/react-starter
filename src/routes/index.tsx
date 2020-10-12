import { Route, RouteContext } from 'universal-router';
import home from './home';

const routes = [
  { ...home },
];

const rootRoute: Route = {
  path: '/',
  children: routes,
  async action(context: RouteContext) {
    // Do action when navigation starts

    const children = await context.next();

    // Do action when navigation ends

    return children;
  },
};

export default rootRoute;
