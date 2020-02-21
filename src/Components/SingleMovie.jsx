import React from 'react';
import { Link } from "react-router-dom";
//import * as _ from "lodash";
//import NavBar from "./NavBar"

class SingleMovie extends React.Component {

    constructor(props) {
        super(props);
        this.setState({ movie: this.props.movie });
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
        //console.log(this.state.movie)
        return (
            <div className="columns card">
                <figure class="image is-128x128">
                    <img src={require("../Images/IronMan.jpg")} alt="ironman" className="" />
                </figure>
                <span className="column">Movie Title</span>
                <span className="column">1900</span>
                <span className="column">8.3</span>
                <button className="column button is-1">Fav</button>
                <Link to="/MovieDetails" className="column button is-1">Details</Link>
            </div>

        )

    }
}

export default SingleMovie;