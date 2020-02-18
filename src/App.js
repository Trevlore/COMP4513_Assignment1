import React from 'react';
import './App.css';
import Home from './Components/Home';
import * as _ from 'lodash';

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
            <div className="App">
                <Home/>
            </div>
        );
    }
}

export default App;
