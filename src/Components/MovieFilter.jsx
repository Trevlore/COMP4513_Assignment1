import React from 'react';
import * as _ from "lodash";

class MovieFilter extends React.Component {
    buttonStyle = {
       "margin-right": ".5rem",
    };

    render() {
        //console.log(this.state.movie)
        return (
            
                <div className="column is-two-fifths">
                    <div className="container box">
                        <form action="">
                            <h1 className="has-text-centered">Movie Filters</h1>

                            <div classname="field">
                                <label classname="label" htmlFor="#TitleFilter">Title</label>
                                <div classname="control">
                                    <input className="input" id="TitleFilter" type="text" />
                                </div>
                            </div>

                            <div classname="field">
                                <h3 classname="" htmlFor="">Year</h3>
                                <div classname="control">
                                    <div className="">
                                        <input classname="column" type="radio" name="year" />
                                        <label classname="box column" htmlFor="">Before</label>
                                        <div className="column is-half is-offset-half"><input className='input' type="text" /></div>
                                    </div>
                                    <div className="">
                                        <input classname="" type="radio" name="year" />
                                        <label classname="label " htmlFor="">After</label>
                                        <div className="column is-half is-offset-half"><input className='input' type="text" /></div>
                                    </div>
                                    <div>
                                        <input type="radio" name="year" />
                                        <label classname="label" htmlFor="">Between</label>
                                        <div className="column is-half is-offset-half" ><input className="input" type="text" /></div>
                                        <div className="column is-half is-offset-half"><input className="input" type="text" /></div>
                                    </div>
                                </div>
                            </div>

                            <div classname="field">
                                <h3 classname="" htmlFor="">Rating</h3>
                                <div classname="control">
                                    <div>
                                        <input type="radio" name="rating" />
                                        <label classname="label" htmlFor="">Before</label>
                                        <input type="range" min="1" max="10" defaultValue="5" /></div>
                                    <div>
                                        <input type="radio" name="rating" />
                                        <label classname="label" htmlFor="">After</label>
                                        <input type="range" min="1" max="10" defaultValue="5" />
                                    </div>
                                    <div>
                                        <input type="radio" name="rating" />
                                        <label classname="label" htmlFor="">Between</label>
                                        <input type="range" min="1" max="10" defaultValue="5" />
                                        <input type="range" min="1" max="10" defaultValue="5" />
                                    </div>
                                </div>

                            </div>
                            <div className="control has-text-centered">
                                <button style={this.buttonStyle} className="button">Filter</button>
                                <button style={this.buttonStyle} className="button">Clear</button>
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