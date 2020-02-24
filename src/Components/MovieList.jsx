import React from 'react';
import SingleMovie from "./SingleMovie";
import '../Style/Table.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { movie: this.props.movie };
    }

    RenderMovies = () => {
        return (
            <tbody>
                {this.props.movies.map((x) => {
                    return (
                        <SingleMovie
                            key={x.id}
                            id={x.id}
                            title={x.title}
                            releaseDate={x.release_date.getFullYear().toString()}
                            rating={x.ratings.average}
                            imageUrl={x.poster}
                        />
                    )
                })}
            </tbody>
        )
    };

    render() {
        return (
            <div className="box table-container">
                <h1 className="title">Movie List</h1>
                <table className="table is-fullwidth" style={{ overflowX: "auto" }}>
                    <thead>
                        <tr className="columns">
                            <th className="column" />{/*Image*/}
                            <th className="column">Title</th>
                            <th className="column">Year</th>
                            <th className="column">Rating</th>
                            <th className="column" />{/*Heart and View*/}
                        </tr>
                    </thead>
                    {/* <TransitionGroup>
                        <CSSTransition exit={true} in={this.state.transition} classNames="singleMovie" timeout={1000}> */}
                            <this.RenderMovies />
                        {/* </CSSTransition>
                    </TransitionGroup> */}

                </table>
            </div>
        )
    }
}

export default MovieList;