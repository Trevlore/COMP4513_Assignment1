import React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";


class CastAndCrew extends React.Component {


    state = {
        active: 'Cast',
        passive: 'Crew'
    };

    tapHandler = (e) => {
        const currElem = e.currentTarget;
        const id = currElem.getAttribute('id');
        if (id == this.state.passive) {
            document.getElementById(this.state.active).classList.toggle('is-active');
            document.getElementById(this.state.passive).classList.toggle('is-active');
            this.setState({
                active: this.state.passive,
                passive: this.state.active
            });
        }

    };

    toggleActive = (id) => document.getElementById(id).classList.toggle('is-active');

    renderCrew() {

    }

    renderCast() {

    }

    render() {
        
        return (
            <div id="CastAndCrew" className="column container box">
                <div class="tabs">
                    <ul>
                        <li id='Cast' className="is-active" onClick={this.tapHandler}><a>Cast</a></li>
                        <li id='Crew' className="" onClick={this.tapHandler}><a>Crew</a></li>
                        <button id='Close' className="button " onClick={this.tapHandler}>Close</button>
                    </ul>

                </div>

            </div >
        )
    }
}

export default CastAndCrew;