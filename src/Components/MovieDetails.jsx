import React from 'react';
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import ViewTaps from './ViewTaps';
import { generateRegex, getSearchParam } from "../Helpers/Helper";
import { CSSTransition } from 'react-transition-group';
import About from './About'
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

    posterLink = "https://image.tmdb.org/t/p/w500/";
    render() {

        if (!this.state.movie) {
            return (<div>loading</div>)
        } else {
            console.log(this.state.movie)
            const { production, imdb_id, title, tmdb_id, id, poster, details } = this.state.movie;
            return (

                <div>

                    <NavBar />
                    <FavoritesBar favorites={[]} />
                    <About />
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <div className="columns ">

                                <div className="column is-two-fifths">
                                    <header className="card-header"><a className="card-footer-item ">Add to favorites</a></header>
                                    <div className="card-image">
                                        <figure className="image is-2by3">
                                            <img src={this.posterLink + poster} alt="Poster" />
                                        </figure>
                                    </div>


                                </div>

                                <div className="column">
                                    <div>
                                        <div className="title">{title}</div>
                                        <div className="tile">{details.overview}</div>
                                    </div>

                                    <div className="columns">
                                    <div className="column">
                                        <div className="">Countries</div>
                                        <div className="tags">
                                            <span className="tag">One</span>
                                            <span className="tag">Two</span>
                                            <span className="tag">Three</span>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="">Companies</div>
                                        <div className="tags">
                                            <span className="tag">One</span>
                                            <span className="tag">Two</span>
                                            <span className="tag">Three</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="column">
                            <ViewTaps cast={production.cast} crew={production.crew}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MovieDetails;