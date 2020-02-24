import React from "react";
import NavBar from "./NavBar";
import FavoritesBar from "./FavoritesBar";
import {routeNames} from "../Helpers/RouteNames";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import {FavoriteContext} from "../Context/FavoriteContex";

class MovieRoute extends React.Component {


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
                    <FavoritesBar favorites={this.context.favoritesArray}/>
                </nav>
                {renderMe}
            </main>
        )

    }
}

MovieRoute.contextType = FavoriteContext;

export default MovieRoute