import React from 'react';
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import ViewTaps from './ViewTaps';
import { generateRegex, getSearchParam } from "../Helpers/Helper";
import { CSSTransition } from 'react-transition-group';
import About from './About'
import DetailsView from './DetailsView'

import "../Style/Details.css"

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: getSearchParam("id")
        }
    }

    async componentDidMount() {
        //console.log('componentDidMount')
        // imdb_id
        // https://www.themoviedb.org/movie/imdb_id 
        // https://www.imdb.com/title/imdb_id,
        const request = await fetch("http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=" + getSearchParam("id"));
        let parsedMovie = await request.json();
        this.setState({ movie: parsedMovie });
    }

    
    render() {

        if (!this.state.movie) {
            return (<div>loading</div>)
        } else {
            console.log(this.state.movie)
            const { production, imdb_id, title, tmdb_id, id, poster, details } = this.state.movie;
            return (
                <div className="MovieDetails">
                    <NavBar />
                    <FavoritesBar favorites={[]} />
                    <About />
                    <DetailsView title={title} poster={poster} production={production} details={details}/>
                </div>
            )
        }
    }
}

export default MovieDetails;