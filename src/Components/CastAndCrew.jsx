import React from "react";
// import * as _ from "lodash";
//import { Link } from "react-router-dom";


class CastAndCrew extends React.Component {


    state = {
        active: 'Cast',
        passive: 'Crew'
    };

    tapHandler = (e) => {
        const currElem = e.currentTarget;
        const id = currElem.getAttribute('id');
        if (id === this.state.passive) {
            this.toggleActive(this.state.active);
            this.toggleActive(this.state.passive);
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
                <div className="tabs">
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