import React from 'react';
import './App.css';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import Movies from './Components/Movies';
import {Route, Switch} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <main className="App">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/Movies" component={Movies} exact/>
                    <Route path="/Movies/Details" component={MovieDetails} exact/>
                </Switch>
            </main>
        );

    }
}

export default App;
