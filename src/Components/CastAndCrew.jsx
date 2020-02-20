import React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";


class CastAndCrew extends React.Component {

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
            <div id="CastAndCrew" className="column container box">
                <div class="tabs">
                    <ul>
                        <li class="is-active"><a>Cast</a></li>
                        <li><a>Crew</a></li>
                        <button className="button ">Close</button>
                    </ul>
                    
                </div>

            </div >
        )
    }
}

export default CastAndCrew;