import React from "react";
import * as _ from "lodash";
import {Link} from "react-router-dom";


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

    render() {
        return (
            <div className="is-fullheight">
                <div className="column is-4 is-offset-4" style={this.style}>
                    <div className="box" >
                    <h3 className="title has-text-black has-text-centered">Movies</h3>

                        <div className="field">
                            <div className="control">
                                <input  name="searchQuery" onChange={this.onChange} className="input is-large" type="text" placeholder="Title"/>
                            </div>
                        </div>
                        <div className="level">
                            <Link to="/movies" className="level-item has-text-centered button is-block is-info is-large">Show All Movies</Link>
                            <Link to={"/movies?query="+this.state.searchQuery} className="level-item has-text-centered button is-block is-info is-large">Search Movies</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;