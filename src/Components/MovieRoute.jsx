import React from "react";
import NavBar from "./NavBar";
import FavoritesBar from "./FavoritesBar";
import {routeNames} from "../Helpers/RouteNames";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import {cloneDeep} from "lodash"

class MovieRoute extends React.Component {
    state = {
        favorites: []
    };

    addFavorite = (favObj) => {
        const newState = cloneDeep(this.state);
        if(!newState.favorites.find(x=>x.id === favObj.id)){
            newState.favorites.push(favObj);
            this.setState(newState);
        }
    };

    render() {
        const path = this.props.match.path;
        let renderMe;
        if (routeNames.Movies.regex.test(path))
            renderMe = <Movies addFavorite={this.addFavorite}/>;
        else if (routeNames.MovieDetails.regex.test(path))
            renderMe = <MovieDetails addFavorite={this.addFavorite}/>;

        return (
            <main>
                <nav>
                    <NavBar/>
                    <FavoritesBar addFavorite={this.addFavorite} favorites={this.state.favorites}/>
                </nav>
                {renderMe}
            </main>
        )

    }
}

export default MovieRoute