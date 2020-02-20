import React from 'react';
import * as _ from "lodash";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import CastAndCrew from './CastAndCrew';


class MovieDetails extends React.Component {

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
                <div>
                <NavBar />
                <FavoritesBar favorites={[]} />
                    <div className="columns column has-background-grey-light">
                        <div className="column is-three-fifths">
                            <div className="container columns">
                                <h1 className="title column is-three-fifths">Movie Title</h1>
                                <button className="button has-background-warning">Add to favorites</button>
                            </div>
                            <div className="container columns">
                                <figure class="column is-half image is-4by5">
                                    <img src={require("../Images/IronMan.jpg")} className="" />
                                </figure>
                            <div class="column is-half">
                                <p>Details</p>
                                <div className="tile">info</div>
                                <div className="tile">info</div>
                                <div className="tile">info</div>
                            </div>
                            </div>
                        </div>
                        <CastAndCrew/>
                    </div>
                </div>
   
            
        )
    }
}

export default MovieDetails;