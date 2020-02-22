import React from 'react';
import * as _ from "lodash";
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import {generateRegex, getSearchParam} from "../Helpers/Helper";
import {withRouter} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStroopwafel} from "@fortawesome/free-solid-svg-icons";

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
        console.log(props.location.search);
        const searchParams = _.cloneDeep(defaultQueryParams);
        searchParams.title = GetSearchParam("title");
        this.state = {
            movies: [],
            searchParams: searchParams
        }
    }



    async componentDidMount() {
        const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL");
        const moviesArray = await request.json();
        const newState = _.cloneDeep(this.state);
        newState.movies = moviesArray.map(x => {
            x.release_date = new Date(x.release_date);
            return x;
        });
        newState.isLoading = false;
        //this.setState(newState);
    }
    }

    updateQuery = (searchParams) => {
        const newState = _.cloneDeep(this.state);
        newState.searchParams = searchParams;
        this.setState(newState);
    };

    filterOnQuery () {
        return this.state.movies.filter((x) => {
            return generateRegex(this.state.searchParams.title).test(x.title) &&
                Number(x.release_date.getFullYear()) >= this.state.searchParams.minYear &&
                Number(x.release_date.getFullYear()) <= this.state.searchParams.maxYear &&
                Number(x.ratings.average) >= this.state.searchParams.minRating &&
                Number(x.ratings.average) <= this.state.searchParams.maxRating;


        });
    };

    render() {
        const movieList = this.filterOnQuery();
        return (
            <div>
                <NavBar/>
                <FavoritesBar favorites={[]}/>
                <div className="columns">
                    <MovieFilter
                        updateQuery={this.updateQuery}
                        searchParams={this.state.searchParams}
                    />
                    <div className="column has-text-centered">
                        {this.state.isLoading? <FontAwesomeIcon icon={faStroopwafel} className="fa-spin fa-10x"/>:<MovieList movies={movieList}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Movies);