import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class SingleMovie extends React.Component {

    constructor(props) {
        super(props)
    }
    
      posterLink = "https://image.tmdb.org/t/p/w154/";

    onFavsClick = (e)=>{
        this.props.addFavorite({url: this.props.imageUrl, id: this.props.id, alt: this.props.title});
    };

    render() {
        return (
            <tr>
                <td>
                    <figure className="image is-fullwidth">
                        <img src={this.posterLink + this.props.imageUrl} alt="Poster" aria-label="close"/>
                    </figure>
                </td>
                <td>{this.props.title}</td>
                <td>{this.props.releaseDate}</td>
                <td>{this.props.rating}</td>
                <td className="">
                    <button onClick={this.onFavsClick} className="button is-1"><FontAwesomeIcon icon={faHeart}  className="fa fa-heart"/></button>
                    <Link to={"/Movies/Details?id=" + this.props.id} path={this.props.id}  className="button is-1" style={{margin : "0"}}>View</Link>
                </td>
            </tr>

        )
    }
}


export default SingleMovie;