import React from 'react';
import './App.css';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import * as _ from 'lodash';
import {Route, Switch} from "react-router";
import { Link } from 'react-router-dom';

class App extends React.Component {

    state = {
        movies: []
    };

    async componentDidMount() {
        const request = await fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL");
        const JSON = request.json();
        const newState = await _.cloneDeep(this.state);
        newState.movies = await JSON;
        this.setState(newState);
    }

    render() {
        return (
            <main className="App">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/MovieDetails"  component={MovieDetails} testMovie={this.state.movies[0]} exact />
                </Switch>
            </main>
        );
    }
}

export default App;
