import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import {connect} from 'react-redux';
import SignInAndSignUp from './pages/sign-and-signout/signin-signout.components'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'; 
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
 

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     currentUser:null
  //   }

  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser  : user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);