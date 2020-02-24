import React from "react";
import "../Style/Favorite.css"

class SingleFavorite extends React.Component {
    posterUrl = "https://image.tmdb.org/t/p/w92/";

    render() {
        return (
            <div className="column">
                <figure className="image">
                    <img className="favImage" src={this.posterUrl + this.props.favorite.url} alt={this.props.favorite.alt}/>
                </figure>
            </div>
        )
    }
}


export default SingleFavorite;