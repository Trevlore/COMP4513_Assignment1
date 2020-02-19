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
                
                <NavBar/>
                <FavoritesBar favorites={[]}/>
                <MovieFilter/>

            </div> 
        )
    }
}

export default MovieDetails;