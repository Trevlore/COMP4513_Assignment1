import React from "react";
import {Link} from "react-router-dom";
import SingleCrew from "./SingleCrew"
import SingleCast from "./SingleCast"
import "../Style/Table.css"


class ViewTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 'Cast',
            passive: 'Crew'
        }
    }


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

    renderCrew(crew) {
        return (
            <table className="table is-fullwidth" style={{ overflowX: "auto" }}>
                <thead>
                    <tr className="columns">
                        <th className="column">Department</th>
                        <th className="column">Job</th>
                        <th className="column">Name</th>
                        <th className="column" />{/*View*/}
                    </tr>
                </thead>
                <tbody>
                    {crew != null ? crew.map((crew) => {
                        return (
                            <SingleCrew
                                key={crew.id}
                                id={crew.id}
                                credit_id={crew.credit_id}
                                department={crew.department}
                                job={crew.job}
                                name={crew.name}
                            />
                        )
                    }): <tr></tr>}
                </tbody>
            </table>
        )
    }


    renderCast(cast) {
        
        return (
            <table className="table is-fullwidth" style={{ overflowX: "auto" }}>
                <thead>
                    <tr className="columns">
                        <th className="column">Character</th>
                        <th className="column">Actor</th>
                        <th className="column" />{/*View*/}
                    </tr>
                </thead>
                <tbody>
                    {cast != null ? cast.map((cast) => {
                        return (
                            <SingleCast
                                key={cast.id}
                                id={cast.id}
                                cast_id={cast.cast_id}
                                character={cast.character}
                                credit_id={cast.credit_id}
                                gender={cast.gender}
                                name={cast.name}
                                order={cast.order}
                                castButton={this.props.castButton}
                            />
                        )
                    }) : <tr/>}
                </tbody>
            </table>
        )
    }

    render() {
        const {cast, crew} = this.props;
        return (
            <div id="CastAndCrew" className="column container box">
                <div className="tabs">
                    <ul>
                        <li id='Cast' className="is-active" onClick={this.tapHandler}><a>Cast</a></li>
                        <li id='Crew' className="" onClick={this.tapHandler}><a>Crew</a></li>
                        <Link to="/Movies" path={"/Movies"} className="button is-1 is-right" style={{ margin: "0", }}>Back</Link>
                    </ul>
                </div>
                <div className="table-container">

                    {this.state.active === "Cast" ? this.renderCast(cast) : this.renderCrew(crew)}

                </div>

            </div>
        )
    }
}

export default ViewTabs;