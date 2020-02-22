import React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

import "../Style/Home.css"

class Home extends React.Component {

    constructor() {
        super();
        this.state = { searchQuery: "", searchEnter: null, transition: true };
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    onChange = (e) => {
        const currElem = e.target;
        const key = currElem.getAttribute('name');
        const newState = _.cloneDeep(this.state);
        newState[key] = currElem.value;
        this.setState(newState);
    };

    style = {
        paddingTop: "35vh"
    };

    linkBottomRight = {
        "borderBottomRightRadius": "0",
        "borderTopRightRadius": "0"
    };

    linkBottomLeft = {
        "borderBottomLeftRadius": "0",
        "borderTopLeftRadius": "0"
    };


    animate() {
        const newState = _.cloneDeep(this.state);
        newState.transition = false;
        this.setState(newState);
    }

    onKeyDown(e) {
        if (e.key === 'Enter') {
            const newState = _.cloneDeep(this.state);
            newState.searchEnter = true;
            this.setState(newState);
        }
    }

    render() {
        if (this.state.searchEnter) {
            return this.renderKeypress();
        }
        else {
            return this.renderNormal();
        }

    }
    renderKeypress() {
        return (
            <Redirect push to={"/movies?movie=" + this.state.searchQuery} />
        )
    }

    renderNormal() {
        return (
            <div className="is-fullheight hero">
                <div className="column is-4 is-offset-4" style={this.style}>
                    <CSSTransition exit={true} in={this.state.transition} classNames="searchBox" timeout={1500} appear mountOnEnter unmountOnExit>
                        <div className="box searchBox">
                            <h3 className="title has-text-black has-text-centered">Your Movie List</h3>

                            <div className="field">
                                <div className="control">
                                    <input name="searchQuery" onChange={this.onChange} onKeyDown={this.onKeyDown} className="input" type="text" placeholder="Title" />
                                </div>
                            </div>
                            <div className="level">
                                <Link to="/movies" className="level-item has-text-centered button is-block is-info">Show All Movies</Link>
                                <Link to={"/movies?movie=" + this.state.searchQuery} className="level-item has-text-centered button is-block is-info">Search Movies</Link>
                            </div>
                        </div>
                    </CSSTransition>
                    <button type="button" onClick={() => this.animate()}>
                        Test Exit
                    </button>
                </div>

                <footer>
                    <a href="https://unsplash.com/@marjan_blan" className="navbar-end" >

                        <span className="tag is-dark" style={this.linkBottomRight}>Photo by</span>
                        <span className="tag is-info" style={this.linkBottomLeft}>@marjanblan</span>

                    </a>
                </footer>
            </div>

        )
    }
}

export default Home;