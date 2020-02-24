import React from 'react';
import { getSearchParam } from "../Helpers/Helper";
import DetailsView from './DetailsView'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../Style/Details.css"
import {faSync} from "@fortawesome/free-solid-svg-icons";

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        //console.log('componentDidMount')
        // imdb_id
        // https://www.themoviedb.org/movie/imdb_id 
        // https://www.imdb.com/title/imdb_id,
        const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=" + getSearchParam("id"));
        console.log(request)
        let parsedMovie = await request.json();
        
        this.setState({ movie: parsedMovie });
    }

    
    render() {

        if (!this.state) {
            return (<FontAwesomeIcon icon={faSync} className="is-text-centered fa-10x"/>)
        } else {
            const { production, imdb_id, title, tmdb_id, id, poster, details } = this.state.movie;
            return (
                <div className="MovieDetails">
                    <DetailsView title={title} poster={poster} production={production} details={details}/>
                </div>
            )
        }
    }
}

export default MovieDetails;