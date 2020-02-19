import React from 'react';
import * as _ from "lodash";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"

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
            <div>
                <NavBar></NavBar>
                <div className="columns">
                    <div className="column  is-three-fifths box">
                    </div>
                    <div className="column box">
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;