import React from 'react';
import SingleMovie from "./SingleMovie";
import '../Style/Table.css'
import '../Style/Shrink.css'
import { CSSTransition, TransitionGroup} from 'react-transition-group';

class MovieList extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props.movies)
        // this.state = {movies : this.props.movies}
    }


    RenderMovies = () => {
        if (this.props.length === 0){
            return (
                <tbody>
                    <tr>
                        <td/>
                        <td/>
                        <td>No Matches</td>
                        <td/>
                        <td />
                    </tr>
                </tbody>
            )
        }

        return (
            <tbody>
                <TransitionGroup className="Movies">
                {this.props.movies.map((x) => {
                    return (
                        <CSSTransition key={this.props.id} enter exit mountOnEnter unmountOnExit timeout={5000} classNames="singleMovie"> 
                        <SingleMovie
                            addFavorite={this.props.addFavorite}
                            remove={this.props.remove}
                            key={x.id}
                            id={x.id}
                            title={x.title}
                            releaseDate={x.release_date.getFullYear().toString()}
                            rating={x.ratings.average}
                            imageUrl={x.poster}
                            show={true}
                        />
                        </CSSTransition>  
                    )
                    
                })}
                </TransitionGroup>
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

                    <this.RenderMovies />

                </table>
            </div>
        )
    }
}
 


export default MovieList;