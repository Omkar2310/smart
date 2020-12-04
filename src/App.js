import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignUp from './pages/sign-and-signout/signin-signout.components'
import './App.css';
 

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUp}/>
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;