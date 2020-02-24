import React from 'react';
import * as _ from "lodash";
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import {generateRegex, getSearchParam} from "../Helpers/Helper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSync} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, TransitionGroup} from 'react-transition-group';

export const defaultQueryParams = {
    title: "",
    minYear: 1900,
    maxYear: new Date().getFullYear(),
    minRating: 0,
    maxRating: 10
};

class Movies extends React.Component {

    constructor(props) {
        super(props);
        const searchParams = _.cloneDeep(defaultQueryParams);
        searchParams.title = getSearchParam("title");
        let movies = [];
        let loading = true;
        if (localStorage.getItem('movies')) {
            movies = this.getStoredMovies();
            loading = false
        }
        this.state = {
            movies: movies,
            filteredMovies: [],
            searchParams: searchParams,
            isLoading: loading
        }
    }

    getStoredMovies() {
        return JSON.parse(localStorage.getItem('movies')).map(x => {
            x.release_date = new Date(x.release_date);
            return x;
        });
    }

    async componentDidMount() {
        const newState = await _.cloneDeep(this.state);

        if (!localStorage.getItem('movies')) {
            const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL");
            let parsedMovies = await request.json();
            parsedMovies.map(x => {
                x.release_date = new Date(x.release_date);
                return x;
            });
            newState.movies = parsedMovies;
            localStorage.setItem('movies', JSON.stringify(parsedMovies));
            newState.isLoading = false;
            this.setState(newState);
        }
        this.filterOnQuery();
    }

    updateQuery = (searchParams) => {
        const newState = _.cloneDeep(this.state);
        newState.searchParams = searchParams;
        this.setState(newState);
    };

    filterOnQuery = () => {
        const newState = _.cloneDeep(this.state);
        newState.filteredMovies = newState.movies.filter((x) => {
            return generateRegex(this.state.searchParams.title).test(x.title) &&
                Number(x.release_date.getFullYear()) >= this.state.searchParams.minYear &&
                Number(x.release_date.getFullYear()) <= this.state.searchParams.maxYear &&
                Number(x.ratings.average) >= this.state.searchParams.minRating &&
                Number(x.ratings.average) <= this.state.searchParams.maxRating;
        });
        this.setState(newState);
    };

    testfunction(){
        // this.state.movies
    }

    render() {
        return (
            <React.Fragment>

                <div className="columns">
                    <MovieFilter
                        updateQuery={this.updateQuery}
                        searchParams={this.state.searchParams}
                        onSearch={this.filterOnQuery}
                    />
                    <div className="column has-text-centered">
                        {this.state.isLoading ? <FontAwesomeIcon icon={faSync} className="fa-spin fa-10x"/> :
                        <TransitionGroup className="Movies">
                            <MovieList testfunction={this.testfunction} movies={this.state.filteredMovies} addFavorite={this.props.addFavorite}/>
                        </TransitionGroup>
                            }
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Movies;