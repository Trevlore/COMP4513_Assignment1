import React from "react";
import * as _ from "lodash";
import SingleFavorite from "./SingleFavorite";
import { Link } from "react-router-dom";


class FavoritesBar extends React.Component {

    state = {
        favorites: this.props.favorites
    };

    render() {
        return (
            <div className="has-background-grey navbar">
                <div className="navbar-item">
                        <h2 className="has-text-grey-light">Your Favorites</h2>
                        {this.renderList()}
                </div>
            </div>)
    }

    renderList() {
        console.log(this.props.favorites.length);
        return (this.props.favorites.length > 0 ?
            this.props.favorites.map((favorite, index) =>
                <SingleFavorite favorite={favorite} key={index}></SingleFavorite>
            )
            : ""
        );
    }




}


export default FavoritesBar;