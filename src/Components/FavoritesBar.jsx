import React from "react";
import SingleFavorite from "./SingleFavorite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";


class FavoritesBar extends React.Component {

    state = {
        expanded: true
    };

    renderList() {
        return this.props.favorites.map((favorite, index) =>
            <SingleFavorite favorite={favorite} key={favorite.id}/>
        );
    }

    style = {
        position: "absolute",
        bottom: 0,
        marginLeft: "50%"
    };

    renderFavsList() {
        return (
            <div className="navbar-item">
                <h2 className="has-text-grey-light">Your Favorites</h2>
                {this.renderList()}
            </div>
        )
    }

    toggleClose = (e)=>{
        this.setState({...this.state, expanded: !this.state.expanded})
    };

    render() {
        return (
            <div className="has-background-grey navbar">
                {this.renderFavsList()}
                <div style={this.style} onClick={this.toggleClose}>
                    <FontAwesomeIcon className="fa-2x" icon={faCaretDown}/>
                </div>
            </div>)
    }


}


export default FavoritesBar;