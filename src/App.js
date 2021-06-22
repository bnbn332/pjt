import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //React-Router import
import Home from './Home';
import MainPage from './MainPage';

class App extends Component {
  render() {
    return(
      <div>
        <Router basename="/">
          <Route exact path='/' component={Home} />
          <Route exact path='/MainPage' component={MainPage} />
        </Router>
      </div>
    )
  }
}

export default App;