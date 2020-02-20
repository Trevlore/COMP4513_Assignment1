import React from 'react';
import * as _ from "lodash";
import SingleMovie from "./SingleMovie";
import { Link } from "react-router-dom";


class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.setState({ movie: this.props.movie });
    }

    overflow = {
        "max-hieght" : "100%",
        "overflow-x": "hidden",
        "overflow-y": "scroll",
        "flex-grow" : "1",
        height: "50vw"
    };

    render() {
        //console.log(this.state.movie)
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
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
                            <SingleMovie />
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