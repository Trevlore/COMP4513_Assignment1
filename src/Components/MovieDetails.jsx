import React from 'react';
import {getSearchParam} from "../Helpers/Helper";
import DetailsView from './DetailsView'
import ViewTabs from './ViewTabs'
import CastView from './CastView'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../Style/Details.css"
import {faSync} from "@fortawesome/free-solid-svg-icons";
import {cloneDeep} from "lodash";

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
        this.castButton = this.castButton.bind(this);
        this.backToDetailsButton = this.backToDetailsButton.bind(this);
    }

    async componentDidMount() {

        const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=" + getSearchParam("id"));
        let parsedMovie = await request.json();
        this.setState({ movie: parsedMovie, active: 'Details', crew: null});
    }

    castButton(cast_id) {
        const newState = cloneDeep(this.state);
        newState.active = 'Cast';
        newState.cast_id = cast_id;
        this.setState(newState);
    }

    backToDetailsButton() {
        this.setState({active: 'Details'});
    }
  
    render() {
         if (!this.state) {
            return (<FontAwesomeIcon icon={faSync} className="is-text-centered fa-10x fa-spin" />)
        } else {
            return (
                <div className="View">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            {this.state.active === "Details" ?
                                <DetailsView
                                    castButton={this.castButton}
                                    title={this.state.movie.title}
                                    poster={this.state.movie.poster}
                                    production={this.state.movie.production}
                                    details={this.state.movie.details}
                                    countries={this.state.movie.production.countries}
                                    companies={this.state.movie.production.companies}
                                /> :
                                <CastView castButton={this.backToDetailsButton} cast_id={this.state.cast_id}/>}
                        </div>
                        <div className="column">
                            <ViewTabs castButton={this.castButton} cast={this.state.movie.production.cast}
                                      crew={this.state.movie.production.crew}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MovieDetails;