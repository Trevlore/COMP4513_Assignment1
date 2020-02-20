import React from 'react';
import * as _ from "lodash";
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import {GetSearchParam} from "../Helpers/Helper";
import {withRouter} from "react-router";

class Movies extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.location.search);
        this.state = {
            movies: [],
            searchParams: {
                title: GetSearchParam("title"),
                minYear: GetSearchParam("minYear"),
                maxYear: GetSearchParam("maxYear"),
                minRating: GetSearchParam("minRating"),
                maxRating: GetSearchParam("maxRating")
            }
        }
    }

    async componentDidMount() {
        const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL");
        const moviesArray = request.json();
        const newState = await _.cloneDeep(this.state);
        let parsedMovies = await moviesArray;
        parsedMovies.map(x => {
            x.release_date = new Date(x.release_date);
            return x;
        });
        newState.movies = parsedMovies;
        this.setState(newState);
    }

    changeQuery = (searchParams)=>{

    };

    filterOnQuery = () => {
        return [];
    };

    render() {
        return (
            <div>
                <NavBar/>
                <FavoritesBar favorites={[]}/>
                <div className="columns">
                    <MovieFilter
                        changeQuery={this.changeQuery}
                        searchParams={this.state.searchParams}
                    />
                    <MovieList movies={this.filterOnQuery()}/>
                </div>

            </div>
        )
    }
}

export default withRouter(Movies);