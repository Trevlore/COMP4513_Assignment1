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
                minYear: 1900,
                maxYear: new Date().getFullYear(),
                minRating: 0,
                maxRating: 10
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

    updateQuery = (searchParams)=>{
        const newState = _.cloneDeep(this.state);
        newState.searchParams = searchParams;
        this.setState(newState);
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
                        updateQuery={this.updateQuery}
                        searchParams={this.state.searchParams}
                    />
                    <MovieList movies={this.filterOnQuery()}/>
                </div>

            </div>
        )
    }
}

export default withRouter(Movies);