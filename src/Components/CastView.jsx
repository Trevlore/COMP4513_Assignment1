import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Details.css"
import { faSync } from "@fortawesome/free-solid-svg-icons";

class CastView extends React.Component {


	constructor(props) {
		super(props);
		// this.setState({ actor: this.props.actor});
	}

	componentWillReceiveProps(){
		this.getActor()
	}

	async componentDidMount() {
		this.getActor()
	}

	async getActor() {
		const request = await fetch("https://api.themoviedb.org/3/person/" + this.props.cast_id + "?api_key=fef700429c99e494247e8de834e89564");
		let parsedCrew = await request.json();
		this.setState({ actor: parsedCrew});
	}



	render() {

		// https://www.themoviedb.org/movie/imdb_id 
		// https://www.imdb.com/title/imdb_id,
		if (!this.state) {
			return (<FontAwesomeIcon icon={faSync} className="is-text-centered fa-10x fa-spin" />)
		}
		else {
			const { name } = this.state.actor
			return (
				<div className="CastView">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-left">
								</div>
								<div class="media-content">
									<p class="title is-4">{name}</p>
									<p class="subtitle is-6"></p>
								</div>
							</div>

							<div class="content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
								<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
							</div>
							<a onClick={() => this.props.castButton()} className="button is-1 is-danger is-pulled-right" style={{ margin: "0" }}>Close</a>
						</div>

					</div>
				</div>);
		}
	}

}
export default CastView;