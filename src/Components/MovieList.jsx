import React from 'react';
import SingleMovie from "./SingleMovie";
import '../Style/Table.css'
import { CSSTransition, TransitionGroup} from 'react-transition-group';

class MovieList extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.movies)
        this.state = {movies : [...this.props.movies]}
    }

    componentWillReceiveProps(newProps) {
        this.setState({movies : newProps.movies})
      }

    remove(){

    }


    RenderMovies = () => {
        if (this.state.length === 0){
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
                {this.state.movies.map((x) => {
                    return (
                        <SingleMovie
                            addFavorite={this.props.addFavorite}
                            key={x.id}
                            id={x.id}
                            title={x.title}
                            releaseDate={x.release_date.getFullYear().toString()}
                            rating={x.ratings.average}
                            imageUrl={x.poster}
                            show={true}
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

                    <this.RenderMovies />

                </table>
            </div>
        )
    }
}
 


export default MovieList;