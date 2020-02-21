import React from 'react';
import * as _ from "lodash";

class MovieFilter extends React.Component {
    buttonStyle = {
        marginRight: ".5rem",
    };

    onChange = (e) => {

    };

    render() {
        //console.log(this.state.movie)
        return (

            <div className="column is-two-fifths">
                <div className="container box">
                    <form action="">
                        <h1 className="has-text-centered">Movie Filters</h1>

                        <div className="field">
                            <label className="label" htmlFor="#TitleFilter">Title</label>
                            <div className="control">
                                <input className="input" name="title" type="text" onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label level" htmlFor="">Year</label>
                            <div className="control">

                                <div className="control level ">
                                    <input classname="level-item " type="radio" name="year" />
                                    <label className="level-item " htmlFor="">Before</label>
                                    <div className="level-item "><input className="input" type="text" onChange={this.onChange} /></div>
                                </div>

                                <div className="control level">
                                    <input classname="level-item" type="radio" name="year" />
                                    <label className="level-item" htmlFor="">After</label>
                                    <div className="level-item"><input className="input" type="text" onChange={this.onChange} /></div>
                                </div>

                                <div className="control level">
                                    <input classname="level-item" type="radio" name="year" />
                                    <label classname="level-item" htmlFor="">Between</label>
                                    <div classname="level-item" ><input className="input" type="text" onChange={this.onChange} /></div>
                                    <div classname="level-item"><input className="input" type="text" onChange={this.onChange} /></div>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <h3 className="label" htmlFor="">Rating</h3>
                            <div className="control">
                                <div>
                                    <input type="radio" name="rating" />
                                    <label className="" htmlFor="">Below</label>
                                    <input type="range" min="1" max="10" defaultValue="5" onChange={this.onChange} />

                                </div>
                                <div>
                                    <input type="radio" name="rating" />
                                    <label className="" htmlFor="">Above</label>
                                    <input type="range" min="1" max="10" defaultValue="5" onChange={this.onChange} />

                                </div>
                                <div>
                                    <input type="radio" name="rating" />
                                    <label className="" htmlFor="">Between</label>
                                    <input type="range" min="1" max="10" defaultValue="5" onChange={this.onChange} />
                                    <input type="range" min="1" max="10" defaultValue="5" onChange={this.onChange} />
                                </div>
                            </div>

                        </div>
                        <div className="control has-text-centered">
                            <button style={this.buttonStyle} name="clear" onClick={this.onChange} className="button">Filter</button>
                            <button style={this.buttonStyle} name="clear" onClick={this.onChange} className="button">Clear</button>
                        </div>
                    </form>
                </div>
                <div>
                    {}
                </div>
            </div>
        )
    }
}

export default MovieFilter;