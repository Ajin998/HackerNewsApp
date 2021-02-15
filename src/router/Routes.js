import React from "react";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Header from "../components/Header";
import ShowStories from "../components/ShowStories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/:type" component={ShowStories} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
