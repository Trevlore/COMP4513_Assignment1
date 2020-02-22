import React from 'react';
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import CastAndCrew from './CastAndCrew';
import { CSSTransition } from 'react-transition-group';

class MovieDetails extends React.Component {

    render() {
        return (

            <div>
                <CSSTransition exit={true} in={this.state.transition} classNames="hide" timeout={1500} appear >
                    <NavBar />
                    <FavoritesBar favorites={[]} />
                </CSSTransition>

                <CSSTransition exit={true} in={this.state.transition} classNames="searchBox" timeout={1500} appear >
                    <div className="columns column has-background-grey-light">
                        <div className="column is-three-fifths">
                            <div className="container columns levels">
                                <h1 className="title column is-three-fifths level">Movie Title</h1>
                                <button className="button has-background-warning">Add to favorites</button>
                            </div>
                            <div className="container columns ">
                                <figure className="column is-half image ">
                                    <img src={require("../Images/IronMan.jpg")} alt="ironman" className="" />
                                </figure>
                                <div className="column is-half">
                                    <p>Details</p>
                                    <div className="tile">info</div>
                                    <div className="tile">info</div>
                                    <div className="tile">info</div>
                                </div>
                            </div>
                        </div>
                        <CastAndCrew />
                    </div>
                </CSSTransition>
            </div>


        )
    }
}

export default MovieDetails;