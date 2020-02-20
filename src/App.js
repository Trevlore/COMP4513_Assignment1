import React from 'react';
import './App.css';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import Movies from './Components/Movies';
import * as _ from 'lodash';
import {Route, Switch} from "react-router";

class App extends React.Component {

    render() {
        return (
            <main className="App">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/MovieDetails"  component={MovieDetails} exact />
                    <Route path="/Movies"  component={Movies} exact />
                </Switch>
            </main>
        );
    }
}

export default App;
