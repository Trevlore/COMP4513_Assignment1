import React from 'react';
import './App.css';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import Movies from './Components/Movies';
import { Route, withRouter } from "react-router-dom";
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
            {/* <Switch location={location}> */}
            <Route path="/" exact>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Home />
                  </div>
                </CSSTransition>
              )}
            </Route>
            <Route path="/Movies" component={Movies} exact />
            <Route path="/Movies/Details" component={MovieDetails} exact />
            {/* </Switch> */}
          </section>
        </CSSTransition>
      </TransitionGroup>
    

  );
}

export default withRouter(App);
