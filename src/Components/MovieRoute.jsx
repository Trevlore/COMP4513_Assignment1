import React from "react";
import NavBar from "./NavBar";
import FavoritesBar from "./FavoritesBar";
import {routeNames} from "../Helpers/RouteNames";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

class MovieRoute extends React.Component {
    state = {
        favorites: []
    };


    render() {
        const path = this.props.match.path;
        let renderMe;
        if (routeNames.Movies.regex.test(path))
            renderMe = <Movies/>;
        else if (routeNames.MovieDetails.regex.test(path))
            renderMe = <MovieDetails/>;

        return (
            <main>
                <nav>
                    <NavBar/>
                    <FavoritesBar favorites={this.state.favorites}/>
                </nav>
                {renderMe}
            </main>
        )

    }
}

export default MovieRoute