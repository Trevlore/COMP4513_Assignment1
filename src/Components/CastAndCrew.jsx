import React from "react";
import { Link, Redirect } from "react-router-dom";
import Crew from "./Crew"


class CastAndCrew extends React.Component {

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

    renderCrew() {
        console.log("HERE")
        return (
            <ul>
                {this.props.crew.map((crew) => {
                    return (

                        <Crew key={crew.cast_id}
                        // id={x.id}
                        // title={x.title}
                        // releaseDate={x.release_date.getFullYear().toString()}
                        // rating={x.ratings.average}
                        // imageUrl={x.poster}
                        >{crew.name}</Crew>
                    )
                })}
            </ul>
        )
    }

    renderCast() {
        return (
            <ul>
                {this.props.cast.map((x, index) => {
                    return (
                        <li
                            key={index}
                        // id={x.id}
                        // title={x.title}
                        // releaseDate={x.release_date.getFullYear().toString()}
                        // rating={x.ratings.average}
                        // imageUrl={x.poster}
                        >{x.job}</li>
                    )
                })}

            </ul>
        )
    }

    render() {
        console.log(this.state.active)
        const { cast, crew } = this.props
        return (
            <div id="CastAndCrew" className="column container box">
                <div className="tabs">
                    <ul>
                        <li id='Cast' className="is-active" onClick={this.tapHandler}><a>Cast</a></li>
                        <li id='Crew' className="" onClick={this.tapHandler}><a>Crew</a></li>
                        <Link to="/Movies" path={"/Movies"} className="button is-1 is-right" style={{ margin: "0", }}>Back</Link>
                    </ul>



                </div>
                <div>
                    {this.state.active == "Cast" ? this.renderCast() : this.renderCrew()}

                </div>

            </div >
        )
    }
}

export default CastAndCrew;