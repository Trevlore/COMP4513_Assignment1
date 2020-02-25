import React, {useContext} from "react";
import {FavoriteContext} from "../Context/FavoriteContex";


function DetailsView(props) {
    function RenderCountries() {
        return props.countries.map(x => {
            return <span key={x.iso_3166_1} className="tag">{x.name}</span>
        })
    }

    function RenderCompanies() {
        return props.companies.map(x => {
            console.log(x);
            return <span key={x.id} className="tag">{x.name}</span>
        })
    }

    function addFavorite() {
        context.addFavorite({url: props.poster, id: props.id, alt: props.title})
    }

    const context = useContext(FavoriteContext);
    const posterLink = "https://image.tmdb.org/t/p/w500/";
    return (
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
                                    {RenderCountries()}
                                </div>
                            </div>

                            <div className="column">
                                <div className="">Companies</div>
                                <div className="tags">
                                    {RenderCompanies()}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


    )
}
export default DetailsView;