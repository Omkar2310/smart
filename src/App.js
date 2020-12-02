import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';

const hatspage = () => (
  <div>
    <h1> Hi Omkar</h1>
  </div>

);

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={hatspage}/>
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;