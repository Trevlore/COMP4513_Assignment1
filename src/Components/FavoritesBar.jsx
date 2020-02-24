import React from "react";
import SingleFavorite from "./SingleFavorite";


class FavoritesBar extends React.Component {

        renderList() {
        return this.props.favorites.map((favorite, index) =>
                    <SingleFavorite favorite={favorite} key={favorite.id}/>

        );
    }

    render() {
        return (
            <div className="has-background-grey navbar">
                <div className="navbar-item">
                    <h2 className="has-text-grey-light">Your Favorites</h2>
                    {this.renderList()}
                </div>
            </div>)
    }


}


export default FavoritesBar;