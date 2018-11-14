import * as React from "react";
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Route, Switch } from "react-router-dom";
import Games from "./Games";
import Board from "./Board";

const history = createBrowserHistory();

const Routes: React.StatelessComponent<{}> = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Games} />
      <Route exact path="/board/:id" component={Board} />
    </Switch>
  </Router>
);

export default Routes;
