import React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";


class Home extends React.Component {

    state = {
        searchQuery: ""
    };

    onChange = (e) => {
        const currElem = e.target;
        const key = currElem.getAttribute('name');
        const newState = _.cloneDeep(this.state);
        newState[key] = currElem.value;
        this.setState(newState);
    };

    style = {
        paddingTop: "35vh"
    };

    linkBottomRight = {
        "border-bottom-right-radius": "0",
        "border-top-right-radius": "0"
    };

    linkBottomLeft = {
        "border-bottom-left-radius": "0",
        "border-top-left-radius": "0"
    };

    render() {
        return (
            <div className="is-fullheight hero">
                <div className="column is-4 is-offset-4" style={this.style}>
                    <div className="box" >
                        <h3 className="title has-text-black has-text-centered">Your Movie List</h3>

                        <div className="field">
                            <div className="control">
                                <input name="searchQuery" onChange={this.onChange} className="input" type="text" placeholder="Title" />
                            </div>
                        </div>
                        <div className="level">
                            <Link to="/movies" className="level-item has-text-centered button is-block is-info">Show All Movies</Link>
                            <Link to={"/movies?movie=" + this.state.searchQuery} className="level-item has-text-centered button is-block is-info">Search Movies</Link>
                        </div>
                    </div>
                </div>
                <footer>
                    <a href="https://unsplash.com/@marjan_blan" className="navbar-end" >

                        <span className="tag is-dark" style={this.linkBottomRight} >Photo by</span>
                        <span className="tag is-info" style={this.linkBottomLeft}>@marjanblan</span>

                    </a>
                </footer>
            </div>
        )
    }
}

export default Home;