import React, {useContext} from "react";
import ViewTabs from "./ViewTabs"
import {FavoriteContext} from "../Context/FavoriteContex";


function DetailsView(props) {
    function addFavorite() {
        context.addFavorite({url: props.poster, id: props.id, alt: props.title})
    }

    const context = useContext(FavoriteContext);
    const posterLink = "https://image.tmdb.org/t/p/w500/";
    return (
        <div className="columns">
            <div className="column is-two-thirds">
                <div className="columns ">

                    <div className="column is-two-fifths">
                        <header className="card-header"><a onClick={addFavorite} className="card-footer-item ">Add to
                            favorites</a></header>
                        <div className="card-image">
                            <figure className="image is-2by3">
                                <img src={posterLink + props.poster} alt="Poster"/>
                            </figure>
                        </div>
                    </div>

                    <div className="column">
                        <div>
                            <div className="title">{props.title}</div>
                            <div className="tile">{props.details.overview}</div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                <div className="">Countries</div>
                                <div className="tags">
                                    <span className="tag">One</span>
                                    <span className="tag">Two</span>
                                    <span className="tag">Three</span>
                                </div>
                            </div>

                            <div className="column">
                                <div className="">Companies</div>
                                <div className="tags">
                                    <span className="tag">One</span>
                                    <span className="tag">Two</span>
                                    <span className="tag">Three</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="column">
                <ViewTabs cast={props.production.cast} crew={props.production.crew} />
            </div>
        </div>
    )
}
export default DetailsView;