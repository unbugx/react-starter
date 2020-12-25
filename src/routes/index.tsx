import { Route, RouteContext } from 'universal-router';
import home from './home';
import contacts from './contacts';
import notFound from './notFound';

const routes = [
  { ...home },
  { ...contacts },
  { ...notFound },
];

const rootRoute: Route = {
  path: '',
  children: routes,
  async action(context: RouteContext) {
    // Do action when navigation starts

    const children = await context.next();

    // Do action when navigation ends

    return {
      component: children,
    };
  },
};

export default rootRoute;
