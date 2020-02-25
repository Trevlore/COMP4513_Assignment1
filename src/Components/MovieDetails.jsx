import React from 'react';
import { getSearchParam } from "../Helpers/Helper";
import DetailsView from './DetailsView'
import ViewTabs from './ViewTabs'
import CastView from './CastView'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Details.css"
import { faSync } from "@fortawesome/free-solid-svg-icons";

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
        this.castButton = this.castButton.bind(this)
        this.backToDetailsButton = this.backToDetailsButton.bind(this)
    }

    async componentDidMount() {

        const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=" + getSearchParam("id"));
        let parsedMovie = await request.json();
        this.setState({ movie: parsedMovie, active: 'Details', crew: null});
    }

    castButton(cast_id) {
        console.log(cast_id);
        this.setState({active: 'Cast', cast_id: cast_id});
    }

    backToDetailsButton() {
        console.log("castButton");
        this.setState({active: 'Details'});
    }
  
	// async getActor() {
    //     let parsedCrew = '';
    //     const request = await fetch("https://api.themoviedb.org/3/person/" + this.state.cast_id + "?api_key=fef700429c99e494247e8de834e89564")
    //     .then((response) => response.json())
    //     .then((json) => parsedCrew = json);
	// 	return parsedCrew;
	// }

    renderCast() {
        // const actor = this.getActor()
        // console.log(actor)
        return (
            <CastView castButton={this.backToDetailsButton} cast_id={this.state.cast_id} />)
    }

    renderDetails() {
        const { production, title, poster, details } = this.state.movie;
        return (
            <DetailsView castButton={this.castButton} title={title} poster={poster} production={production} details={details} />)
    }

    render() {
         if (!this.state) {
            return (<FontAwesomeIcon icon={faSync} className="is-text-centered fa-10x fa-spin" />)
        } else {
            return (
                <div className="View">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            {this.state.active == "Details" ? this.renderDetails() : this.renderCast()}
                        </div>
                        <div className="column">
                            <ViewTabs castButton={this.castButton} cast={this.state.movie.production.cast} crew={this.state.movie.production.crew} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MovieDetails;