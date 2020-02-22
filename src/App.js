import React from 'react';
import './App.css';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import Movies from './Components/Movies';
import {Route,Router,Switch,withRouter} from "react-router-dom";
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

// class App extends React.Component {

//     render() {
//         return (
//             <main className="App">
//                 <Route path="/" component={Home} exact/>
//                 <Route path="/Movies" component={Movies} exact/> 
//                 <Route path="/Movies/Details" component={MovieDetails} exact/>

//             </main>
//         );

//     }
// }

// export default App;


function App({ location }) {
    return (

        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <section className="route-section">
              <Switch location={location}>
              <Route path="/" component={Home} exact/>
                 <Route path="/Movies" component={Movies} exact/> 
                 <Route path="/Movies/Details" component={MovieDetails} exact/>
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>

    );
  }
 
  export default withRouter(App);
