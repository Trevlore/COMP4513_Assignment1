import React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";


class Home extends React.Component {

    // state = {
    //     searchQuery: ""
    // };

    // onChange = (e) => {
    //     const currElem = e.target;
    //     const key = currElem.getAttribute('name');
    //     const newState = _.cloneDeep(this.state);
    //     newState[key] = currElem.value;
    //     this.setState(newState);
    // };

    // style = {
    //     paddingTop: "35vh"
    // };

    render() {
        return (
            <nav class="bd-navbar navbar has-shadow">
                    <div class="navbar-brand">
                        <span class="navbar-item">
                            Brand
                        </span>
                    </div>

                    <div class="navbar-end">
                        <a class="button navbar-item">
                            <span>About</span>
                        </a>
                    </div>
            </nav>
        )
    }
}

export default Home;