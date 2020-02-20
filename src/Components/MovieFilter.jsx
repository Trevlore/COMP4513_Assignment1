import React from 'react';
import * as _ from "lodash";

class MovieFilter extends React.Component {
    buttonStyle = {
        marginRight: ".5rem",
    };

    onChange = (e) => {
        const curr = e.target;
        const name = curr.name;
        const value = curr.value;
        const newParams = _.cloneDeep(this.props.searchParams);
        newParams[name] = value;
        this.props.updateQuery(newParams);
    };

    render() {
        //console.log(this.state.movie)
        return (
            <div className="column is-two-fifths">
                <div className="container box">
                    <h1 className="has-text-centered">Movie Filters</h1>

                    <div className="field">
                        <label className="label" htmlFor="#TitleFilter">Title</label>
                        <div className="control">
                            <input value={this.props.searchParams.title} className="input"
                                   name="title" type="text" onChange={this.onChange}/>
                        </div>
                    </div>

                    <div className="field">
                        <h3 className="title is-3">Year</h3>
                        <div className="control">
                            <div>
                                <label className="label" htmlFor="">Between</label>
                                <div className="column is-half ">
                                    <input name="minYear" value={this.props.searchParams.minYear}
                                           className="input" type="number" onChange={this.onChange}/>
                                </div>
                                <div className="column is-half ">
                                    <input name="maxYear" value={this.props.searchParams.maxYear}
                                           className="input" type="number" onChange={this.onChange}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <h3 className="title is-3">Rating</h3>
                        <div className="control">
                            <div>
                                <label className="label" htmlFor="">Between</label>
                                <input type="range" min="1" max="10" defaultValue="5" onChange={this.onChange}/>
                                <input type="range" min="1" max="10" defaultValue="5" onChange={this.onChange}/>
                            </div>
                        </div>

                    </div>
                    <div className="control has-text-centered">
                        <button style={this.buttonStyle} name="clear" onClick={this.onChange} className="button">Clear
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default MovieFilter;