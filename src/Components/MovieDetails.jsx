import React from 'react';
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';

class MovieDetails extends React.Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <FavoritesBar favorites={[]} />
                <div>
                    <div className="columns">
                        <div className="column is-three-fifths box">
                            <div className="container columns">
                                <h1 className="title column is-three-fifths">Movie Title</h1>
                                <button className="button">Add to favorites</button>
                            </div>
                            <div className="container columns">
                                <figure class="column is-half image is-4by5">
                                    <img src={require("../Images/IronMan.jpg")} className="" />
                                </figure>
                            </div>
                        </div>
                        <div className="column box">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;