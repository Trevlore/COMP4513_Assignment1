import React from 'react';
import './App.css';
import Home from './Components/Home';
import { Route, withRouter, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MovieRoute from "./Components/MovieRoute";
import {routeNames} from "./Helpers/RouteNames"
function App({ location }) {
  return (

    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <section className="route-section">
          <Switch>
            <Route path={routeNames.Home.name} component={Home} exact />
            <Route path={routeNames.Movies.name} component={MovieRoute} exact />
            <Route path={routeNames.MovieDetails.name} component={MovieRoute} exact />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>


  );
}

export default withRouter(App);
