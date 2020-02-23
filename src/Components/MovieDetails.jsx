import React from 'react';
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import CastAndCrew from './CastAndCrew';
import { CSSTransition } from 'react-transition-group';
import About from './About'

class MovieDetails extends React.Component {

    render() {
        return (

            <div>

                <NavBar />
                <FavoritesBar favorites={[]} />
                
                <div className="columns column has-background-grey-light">
                <About/>
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
            </div>


        )
    }
}

export default MovieDetails;