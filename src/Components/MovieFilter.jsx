import React from 'react';
import * as _ from "lodash";

class MovieFilter extends React.Component {
    buttonStyle = {
       marginRight: ".5rem",
    };

    onChange = (e)=>{

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
                                    <input className="input" name="title" type="text" onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="field">
                                <h3 className="" htmlFor="">Year</h3>
                                <div className="control">
                                    <div>
                                        <label className="label" htmlFor="">Between</label>
                                        <div className="column is-half is-offset-half" ><input className="input" type="text" onChange={this.onChange}/></div>
                                        <div className="column is-half is-offset-half"><input className="input" type="text" onChange={this.onChange}/></div>
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <h3 className="" htmlFor="">Rating</h3>
                                <div className="control">
                                    <div>
                                        <input type="radio" name="rating" />
                                        <label className="label" htmlFor="">Between</label>
                                        <input type="range" min="1" max="10" defaultValue="5" onChange={this.onChange}/>
                                        <input type="range" min="1" max="10" defaultValue="5" onChange={this.onChange}/>
                                    </div>
                                </div>

                            </div>
                            <div className="control has-text-centered">
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