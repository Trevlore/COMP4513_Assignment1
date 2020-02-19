import React from 'react';
import * as _ from "lodash";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"
import FavoritesBar from './FavoritesBar';
import MovieFilter from './MovieFilter';

class MovieDetails extends React.Component {
    
    constructor(props){
        super(props);
        this.setState({movie: this.props.movie}); 
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
                
                <NavBar></NavBar>
                <FavoritesBar favorites={[]}></FavoritesBar>
                <MovieFilter></MovieFilter>
                {/* <div className="columns">
                    <div className="column is-three-fifths box">
                        <div className="container columns">
                            <h1 className="title column is-three-fifths">Movie Title</h1>
                            <button className="button">Add to favorites</button>
                        </div>
                        <div>
                        {}
                        </div>
                    </div>
                    <div className="column box">
                    </div>
                </div>*/}
            </div> 
        )
    }
}

export default MovieDetails;