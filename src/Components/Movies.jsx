import React from 'react';
import * as _ from "lodash";
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import { generateRegex, getSearchParam } from "../Helpers/Helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from 'react-router';



export const defaultQueryParams = {
    title: "",
    minYear: 1900,
    maxYear: new Date().getFullYear(),
    minRating: 0,
    maxRating: 10
};

class Movies extends React.Component {

    constructor(props) {
        console.log('constructor')
        super(props);
        const searchParams = _.cloneDeep(defaultQueryParams);
        searchParams.title = getSearchParam("title");
        let movies = [];
        if (localStorage.getItem('movies')) { movies = this.getStoredMovies(); }
        this.state = {
            movies: movies,
            searchParams: searchParams
        }
    }

    getStoredMovies() {
        return JSON.parse(localStorage.getItem('movies')).map(x => {
            x.release_date = new Date(x.release_date);
            return x;
        });
    }

    async componentDidMount() {
        console.log('componentDidMount')
        if (!localStorage.getItem('movies')) {
            const newState = await _.cloneDeep(this.state);
            const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL");
            let parsedMovies = await request.json();
            parsedMovies.map(x => {
                x.release_date = new Date(x.release_date);
                return x;
            });
            newState.movies = parsedMovies;
            localStorage.setItem('movies', JSON.stringify(parsedMovies));
            this.setState(newState);
        }
    }

    updateQuery = (searchParams) => {
        const newState = _.cloneDeep(this.state);
        newState.searchParams = searchParams;
        this.setState(newState);
    };

    filterOnQuery() {
        return this.state.movies.filter((x) => {
            return generateRegex(this.state.searchParams.title).test(x.title) &&
                Number(x.release_date.getFullYear()) >= this.state.searchParams.minYear &&
                Number(x.release_date.getFullYear()) <= this.state.searchParams.maxYear &&
                Number(x.ratings.average) >= this.state.searchParams.minRating &&
                Number(x.ratings.average) <= this.state.searchParams.maxRating;


        });
    };

    render() {
        console.log("render");
        const movieList = this.filterOnQuery();
        return (
            <div>
                <NavBar />
                <FavoritesBar favorites={[]} />
                <div className="columns">
                    <MovieFilter
                        updateQuery={this.updateQuery}
                        searchParams={this.state.searchParams}
                    />
                    <div className="column has-text-centered">
                        {this.state.movies.length === 0 ? <FontAwesomeIcon icon={faStroopwafel} className="fa-spin fa-10x" /> :
                            <MovieList movies={movieList} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies;