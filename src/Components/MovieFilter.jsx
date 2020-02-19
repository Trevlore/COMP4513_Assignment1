import React from 'react';
import * as _ from "lodash";

class MovieFilter extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.setState({movie: this.props.movie}); 
    // }

    // onChange = (e) => {
    //     const currElem = e.target;
    //     const key = currElem.getAttribute('name');
    //     const newState = _.cloneDeep(this.state);
    //     newState[key] = currElem.value;
    //     this.setState(newState);
    // };

    // style = {
    //     height: ""
    // };

    render() {
        //console.log(this.state.movie)
        return (
            <div className="columns">
                <div className="column  box">
                    <div className="container columns">
                        <form action="">
                            <h1 className="column has-text-centered">Movie Filters</h1>

                            <label classname="label" htmlFor="">Title</label>
                            <input classname="input textarea" type="text" />

                            <h3 classname="" htmlFor="">Year</h3>
                            <input type="radio"/><label classname="label" htmlFor="">Before</label><input type="text"/>
                            <input type="radio"/><label classname="label" htmlFor="">After</label><input type="text"/>
                            <input type="radio"/><label classname="label" htmlFor="">Between</label><input type="text"/><input type="text"/>

                            <h3 classname="" htmlFor="">Rating</h3>
                            <input type="radio"/><label classname="label" htmlFor="">Before</label><input type="range"/>
                            <input type="radio"/><label classname="label" htmlFor="">After</label><input type="range"/>
                            <input type="radio"/><label classname="label" htmlFor="">Between</label><input type="range"/><input type="text"/>

                            <button className="button">Filter</button>
                            <button className="button">Clear</button>
                        </form>
                    </div>
                    <div>
                        {}
                    </div>
                </div>
                <div className="column is-three-fifths box">
                </div>
            </div>
        )
    }
}

export default MovieFilter;