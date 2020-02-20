import React from 'react';
import * as _ from "lodash";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.setState({ movie: [] });
    }

    async componentDidMount() {
        const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL");
        const JSON = request.json();
        const newState = await _.cloneDeep(this.state);
        newState.movies = await JSON;
        this.setState(newState);
    }

    getQueryParam() {
        let urlString = window.location.href;
        let url = new URL(urlString);
        let rtnMe = url.searchParams.get('search') ? url.searchParams.get('search') : ""; // truthy falsy
        console.log(rtnMe);
        return rtnMe;

    }

    render() {
        return (
            <div>
                <NavBar />
                <FavoritesBar favorites={[]} />
                <div className="columns">
                    <MovieFilter />
                    <MovieList />
                </div>

            </div>
        )
    }
}

export default Movies;