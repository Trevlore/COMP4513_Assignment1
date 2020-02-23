import React from 'react';
import './App.css';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import Movies from './Components/Movies';
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
            <Route path="/" component={Home} exact />
            <Route path="/Movies" component={Movies} exact />
            <Route path="/Movies/Details" component={MovieDetails} exact />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>


  );
}

export default withRouter(App);
