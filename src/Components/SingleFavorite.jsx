import React from "react";
import "../Style/Favorite.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

class SingleFavorite extends React.Component {
    posterUrl = "https://image.tmdb.org/t/p/w92/";

    state = {
        hovering: false
    };

    toggleHover = (e) => {
        this.setState(prevState => ({hovering: !prevState.hovering}));
    };

    render() {
        return (
            <div className="column">
                <figure className="image"
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                >
                    {this.state.hovering ? <FontAwesomeIcon icon={faWindowClose} className="fa-2x closeButton"/> : null}
                    <img
                        className="favImage"
                        src={this.posterUrl + this.props.favorite.url}
                        alt={this.props.favorite.alt}/>
                </figure>
            </div>
        )
    }
}


export default SingleFavorite;