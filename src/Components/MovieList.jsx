import React from 'react';
import SingleMovie from "./SingleMovie";
import '../Style/Table.css'

class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {movie: this.props.movie};
    }

    RenderMovies = () => {
        return (
            <tbody style={this.tbodyStyle}>
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
                    <table className="table is-fullwidth" style={{overflowX:"auto"}}>
                        <thead>
                        <tr>
                            <th/>{/*Image*/}
                            <th>Title</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th/>{/*Heart and View*/}
                        </tr>
                        </thead>
                        <this.RenderMovies/>
                    </table>
                </div>
        )
    }
}

export default MovieList;