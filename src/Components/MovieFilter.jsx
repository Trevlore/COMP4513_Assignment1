import React from 'react';
import * as _ from "lodash";
import {defaultQueryParams} from "./Movies";

class MovieFilter extends React.Component {
    buttonStyle = {
        marginRight: ".5rem",
    };

    selectorOptions = {
        min: 0,
        max: 1,
        between: 2
    };

    state = {
        yearSelected: this.selectorOptions.between,
        ratingSelected: this.selectorOptions.between
    };

    updateQueryParams = (e) => {
        const curr = e.target;
        const name = curr.name;
        const value = curr.value;
        const newParams = _.cloneDeep(this.props.searchParams);
        newParams[name] = value;
        if (this.state.yearSelected === this.selectorOptions.min) {
            newParams.minYear = defaultQueryParams.minYear;
        } else if (this.state.yearSelected === this.selectorOptions.max) {
            newParams.maxYear = defaultQueryParams.maxYear;
        }

        if (this.state.ratingSelected === this.selectorOptions.min) {
            newParams.minRating = defaultQueryParams.minRating;
        } else if (this.state.ratingSelected === this.selectorOptions.max) {
            newParams.maxRating = defaultQueryParams.maxRating;
        }
        this.props.updateQuery(newParams);
    };

    changeInput = (e) => {
        console.log(e);
        const curr = e.target;
        const name = curr.name;
        const value = Number(curr.value);
        const newState = _.cloneDeep(this.state);
        newState[name] = value;
        this.setState(newState);
    };

    render() {
        return (
            <div className="column is-two-fifths">
                <div className="container box">
                    <h1 className="has-text-centered">Movie Filters</h1>

                    <div className="field">
                        <label className="label" htmlFor="TitleFilter">Title</label>
                        <div className="control">
                            <input value={this.props.searchParams.title} id="TitleFilter"
                                   className="input" name="title" type="text" onChange={this.updateQueryParams}/>
                        </div>
                    </div>

                    <div className="field">
                        <h3 className="title is-3">Year</h3>
                        <div className="control level">
                            <div className="level-item level-left">
                                <input type="radio" name="yearSelected" id="yearBefore"
                                       value={this.selectorOptions.max} onChange={this.changeInput}
                                       checked={this.state.yearSelected === this.selectorOptions.max}
                                />
                                <label htmlFor="yearBefore" className="title is-5">Before</label>
                            </div>
                            <div className="column level-right is-4">
                                <input name="minYear" value={this.props.searchParams.maxYear}
                                       className="input" type="number" onChange={this.updateQueryParams}
                                       disabled={this.state.yearSelected !== this.selectorOptions.max}
                                />
                            </div>
                        </div>
                        <div className="control level">
                            <div className="level-item level-left">
                                <input type="radio" name="yearSelected" id="yearAfter"
                                       value={this.selectorOptions.min} onChange={this.changeInput}
                                       checked={this.state.yearSelected === this.selectorOptions.min}
                                />
                                <label htmlFor="yearAfter" className="title is-5">After</label>
                            </div>
                            <div className="column level-right is-4">
                                <input name="maxYear" value={this.props.searchParams.minYear}
                                       className="input" type="number" onChange={this.updateQueryParams}
                                       disabled={this.state.yearSelected !== this.selectorOptions.min}/>
                            </div>
                        </div>
                        <div className="control level">
                            <div className="level-item level-left">
                                <input type="radio" name="yearSelected" id="yearBetween"
                                       value={this.selectorOptions.between} onChange={this.changeInput}
                                       checked={this.state.yearSelected === this.selectorOptions.between}
                                />
                                <label htmlFor="yearBetween" className="title is-5">Between</label>
                            </div>
                            <div className="column level-item is-2">
                                <input name="minYear" value={this.props.searchParams.minYear}
                                       className="input" type="number" onChange={this.updateQueryParams}
                                       disabled={this.state.yearSelected !== this.selectorOptions.between}
                                />
                            </div>
                            -
                            <div className="column level-item is-2 ">
                                <input name="maxYear" value={this.props.searchParams.maxYear}
                                       className="input" type="number" onChange={this.updateQueryParams}
                                       disabled={this.state.yearSelected !== this.selectorOptions.between}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <h3 className="title is-3">Rating</h3>
                        <div className="control level">
                            <div className="level-item level-left">
                                <input name="ratingSelected" type="radio" id="ratingMax"
                                       value={this.selectorOptions.max} onChange={this.changeInput}
                                       checked={this.state.ratingSelected === this.selectorOptions.between}/>
                                <label className="label" htmlFor="ratingMax">Less than</label>
                            </div>
                            <p>{this.props.searchParams.minRating}</p>
                            <input type="range" min="1" max="10" name="maxRating"
                                   value={this.props.searchParams.maxRating}
                                   onChange={this.updateQueryParams}
                                   disabled={this.state.ratingSelected === this.selectorOptions.max}/>
                        </div>
                        <div className="control level">
                            <div className="level-item level-left">
                                <input name="ratingSelected" type="radio" id="ratingMin"
                                       value={this.selectorOptions.min} onChange={this.changeInput}
                                       checked={this.state.ratingSelected === this.selectorOptions.between}/>
                                <label className="label" htmlFor="ratingMin">Greater than</label>
                            </div>
                            <p>{this.props.searchParams.maxRating}</p>
                            <input type="range" min="1" max="10" name="minRating"
                                   value={this.props.searchParams.minRating}
                                   onChange={this.updateQueryParams}
                                   disabled={this.state.ratingSelected === this.selectorOptions.min}/>
                        </div>
                        <div className="control level">
                            <div className="level-item level-left">
                                <input name="ratingSelected" type="radio" id="ratingBetween"
                                       value={this.selectorOptions.between}
                                       onChange={this.changeInput}
                                       checked={this.state.ratingSelected === this.selectorOptions.between}/>
                                <label className="label" htmlFor="ratingBetween">Between</label>
                            </div>
                            <p>{this.props.searchParams.minRating} - {this.props.searchParams.maxRating}</p>
                            <input type="range" min="1" max="10" name="minRating"
                                   value={this.props.searchParams.minRating}
                                   onChange={this.updateQueryParams}
                                   disabled={this.state.ratingSelected === this.selectorOptions.between}/>
                            <input type="range" min="1" max="10" name="maxRating"
                                   value={this.props.searchParams.maxRating}
                                   onChange={this.updateQueryParams}
                                   disabled={this.state.ratingSelected === this.selectorOptions.between}/>
                        </div>

                    </div>
                    <div className="control has-text-centered">
                        <button style={this.buttonStyle} name="clear" onClick={this.updateQueryParams}
                                className="button">Clear
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default MovieFilter;