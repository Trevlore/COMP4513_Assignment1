import React from 'react';
import './App.css';
import Home from './Components/Home';
import {Route, Switch, withRouter} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MovieRoute from "./Components/MovieRoute";
import {routeNames} from "./Helpers/RouteNames"
import * as PropTypes from "prop-types";
import {cloneDeep} from "lodash";
import {FavoriteContext} from "./Context/FavoriteContex";

class App extends React.Component {
    addFavorite = (favObj) => {
        const newState = cloneDeep(this.state);
        if (!newState.favorites.favoritesArray.find(x => x.id === favObj.id)) {
            newState.favorites.favoritesArray.push(favObj);
            this.setState(newState);
        }
    };

    rmFavorite = (id) => {
        const newState = cloneDeep(this.state);
        newState.favorites.favoritesArray = newState.favorites.favoritesArray.filter((x) => x.id !== id);
        this.setState(newState);
    };


    state = {
        favorites: {
            favoritesArray: [],
            addFavorite: this.addFavorite,
            rmFavorite: this.rmFavorite
        }
    };

    render() {
        let {location} = this.props;


        return (
            <FavoriteContext.Provider value={this.state.favorites}>
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={location.key}
                        timeout={{enter: 300, exit: 300}}
                        classNames="fade">
                        <section className="route-section">
                            <Switch>
                                <Route path={routeNames.Home.name} component={Home} exact/>
                                <Route path={routeNames.Movies.name} component={MovieRoute} exact/>
                                <Route path={routeNames.MovieDetails.name} component={MovieRoute} exact/>
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </FavoriteContext.Provider>

        );
    }
}

App.propTypes = {location: PropTypes.any};

export default withRouter(App);
