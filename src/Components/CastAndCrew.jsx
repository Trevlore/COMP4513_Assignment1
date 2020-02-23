import React from "react";
import { Link ,Redirect} from "react-router-dom";


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
                        <Link to="/Movies" path={"/Movies"}  className="button is-1" style={{margin : "0"}}>Back</Link>
                    </ul>

                </div>

            </div >
        )
    }
}

export default CastAndCrew;