import React from 'react';
import SingleMovie from "./SingleMovie";
//import {CSSTransition} from 'react-transition-group';

class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { movies: this.props.movies };
    }

    overflow = {
        maxHeight : "100%",
        overflowX: "hidden",
        overflowY: "scroll",
        flexGrow : "1",
        height: "50vw"
    };

    RenderMovies = () => {
        return this.props.movies.map((x)=>{
            return (
                <SingleMovie
                    key={x.id}
                    id={x.id}
                    title={x.title}
                    releaseDate={x.release_date}
                    rating={x.ratings.average}
                    poster={x.poster}
                />
                )
        });
    };

    render() {
        return (
            <div className="column">

                <div className="box container" >
                    <h1 className="title columns has-text-centered">Movie List</h1>
                    <div>
                        <div className="columns">
                            <h2 className="column">Title</h2>
                            <h2 className="column">Year</h2>
                            <h2 className="column">Rating</h2>
                        </div>
                        <div style={this.overflow}>
                            <this.RenderMovies/>

                        </div>

                    </div>

                </div>
                <div>
                    {}
                </div>
            </div>
        )
    }
}

export default MovieList;