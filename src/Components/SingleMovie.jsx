import React from 'react';
import { Link } from "react-router-dom";
//import * as _ from "lodash";
//import NavBar from "./NavBar"

class SingleMovie extends React.Component {

    constructor(props) {
        super(props);
    }

    // onChange = (e) => {
    //     const currElem = e.target;
    //     const key = currElem.getAttribute('name');
    //     const newState = _.cloneDeep(this.state);
    //     newState[key] = currElem.value;
    //     this.setState(newState);
    // };

    // style = {
    //     height: ""
    // };

    render() {
        const { key, id, title, releaseDate, rating,poster } = this.props
        return (
            <div className="columns card">
                <figure className="image is-128x128">
                    <img src={"https://image.tmdb.org/t/p/w185/"+poster} alt={title + " poster"} />
                </figure>
                <span className="column">{title}</span>
                <span className="column"></span>
        <span className="column">{rating}</span>
                <button className="column button is-1">Fav</button>
                <Link to="/MovieDetails" className="column button is-1">Details</Link>
            </div>

        )

    }
}

export default SingleMovie;