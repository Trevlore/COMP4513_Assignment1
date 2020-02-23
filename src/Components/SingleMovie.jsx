import React from 'react';
import {Link} from "react-router-dom";

class SingleMovie extends React.Component {

    posterLink = "https://image.tmdb.org/t/p/w154/";

    render() {
        return (
            <tr>
                <td>
                    <figure className="image is-fullwidth is-2by3">
                        <img src={this.posterLink + this.props.imageUrl} alt="ironman"/>
                    </figure>
                </td>
                <td>{this.props.title}</td>
                <td>{this.props.releaseDate}</td>
                <td>{this.props.rating}</td>
                <td>
                    <button className="button is-1">Fav</button>
                    <Link to="/Movies/Details" path={this.props.id}  className="button is-1">View</Link>
                </td>
            </tr>
        )

}        
}

export default SingleMovie;