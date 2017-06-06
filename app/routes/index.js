import React from 'react';
import { Route } from 'react-router';

import App from './app.container';
import DashboardRoute from './dashboard';
import NotFoundRoute from './notFound';

const routes = (
  <Route>
    {DashboardRoute}

    <Route path="404">
      {NotFoundRoute}
    </Route>
  </Route>
);

export default (
  <Route component={App}>
    <Route path="/">
      {routes}
    </Route>

    <Route path="/:lang">
      {routes}
    </Route>

    <Route path="*">
      {NotFoundRoute}
    </Route>
  </Route>
);
