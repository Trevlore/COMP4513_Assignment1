import React from 'react';
import * as _ from "lodash";
import {defaultQueryParams} from "./Movies";
import InputRange from 'react-input-range';
import "../Style/Slider.css"
//import {CSSTransition} from 'react-transition-group';

class MovieFilter extends React.Component {
    buttonStyle = {
        marginRight: ".5rem",
    };
    sliderRange = {
        min: 0,
        max: 10
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

    updateQueryParamsRatingBetween = (value) => {
        const newParams = _.cloneDeep(this.props.searchParams);
        newParams.minRating = value.min;
        newParams.maxRating = value.max;
        this.props.updateQuery(newParams)
    };

    updateQueryParamsRatingMin = (value) => {
        const newParams = _.cloneDeep(this.props.searchParams);
        newParams.minRating = value;
        newParams["maxRating"] = defaultQueryParams.maxRating;
        this.props.updateQuery(newParams)
    };

    updateQueryParamsRatingMax= (value) => {
        const newParams = _.cloneDeep(this.props.searchParams);
        newParams.maxRating = value;
        newParams.minRating = defaultQueryParams.minRating;
        this.props.updateQuery(newParams)
    };

    updateQueryParamsYear = (e) => {
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
        this.props.updateQuery(newParams);
    };

    updateQueryParamsTitle = (e) => {
        const curr = e.target;
        const name = curr.name;
        const newParams = _.cloneDeep(this.props.searchParams);
        newParams[name] = curr.value;
        this.props.updateQuery(newParams);
    };

    changeInput = (e) => {
        const curr = e.target;
        const name = curr.name;
        const value = Number(curr.value);
        const newState = _.cloneDeep(this.state);
        newState[name] = value;
        this.setState(newState);
    };

    render() {
        return (
            <div className="column is-two-fifths filter-container">
                <div className="container box">
                    <h1 className="title has-text-centered">Movie Filters</h1>

                    <div className="field">
                        <label className="title is-3" htmlFor="TitleFilter">Title</label>
                        <div className="control">
                            <input value={this.props.searchParams.title} id="TitleFilter"
                                   className="input" name="title" type="text" onChange={this.updateQueryParamsTitle}/>
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
                                       className="input" type="number" onChange={this.updateQueryParamsYear}
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
                                       className="input" type="number" onChange={this.updateQueryParamsYear}
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
                                       className="input" type="number" onChange={this.updateQueryParamsYear}
                                       disabled={this.state.yearSelected !== this.selectorOptions.between}
                                />
                            </div>
                            -
                            <div className="column level-item is-2 ">
                                <input name="maxYear" value={this.props.searchParams.maxYear}
                                       className="input" type="number" onChange={this.updateQueryParamsYear}
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
                                       checked={this.state.ratingSelected === this.selectorOptions.max}/>
                                <label className="label" htmlFor="ratingMax">Less than</label>
                            </div>
                            <InputRange minValue={this.sliderRange.min} maxValue={this.sliderRange.max}
                                        onChange={this.updateQueryParamsRatingMax}
                                        value={this.props.searchParams.maxRating}
                                        disabled={this.state.ratingSelected !== this.selectorOptions.max}
                            />
                        </div>
                        <div className="control level">
                            <div className="level-item level-left">
                                <input name="ratingSelected" type="radio" id="ratingMin"
                                       value={this.selectorOptions.min} onChange={this.changeInput}
                                       checked={this.state.ratingSelected === this.selectorOptions.min}/>
                                <label className="label" htmlFor="ratingMin">Greater than</label>
                            </div>
                            <InputRange minValue={this.sliderRange.min} maxValue={this.sliderRange.max}
                                        onChange={this.updateQueryParamsRatingMin}
                                        value={this.props.searchParams.minRating}
                                        disabled={this.state.ratingSelected !== this.selectorOptions.min}
                            />

                        </div>
                        <div className="control level">
                            <div className="level-item level-left">
                                <input name="ratingSelected" type="radio" id="ratingBetween"
                                       value={this.selectorOptions.between}
                                       onChange={this.changeInput}
                                       checked={this.state.ratingSelected === this.selectorOptions.between}/>
                                <label className="label" htmlFor="ratingBetween">Between</label>
                            </div>
                            <InputRange minValue={this.sliderRange.min} maxValue={this.sliderRange.max} name="ratingBetween"
                                        onChange={this.updateQueryParamsRatingBetween}
                                        value={{
                                            min: this.props.searchParams.minRating,
                                            max: this.props.searchParams.maxRating
                                        }}
                                        disabled={this.state.ratingSelected !== this.selectorOptions.between}
                            />

                        </div>

                    </div>

                    <div className="control has-text-centered">
                        <button style={this.buttonStyle} name="clear" onClick={this.updateQueryParamsYear}
                                className="button">Clear
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default MovieFilter;

