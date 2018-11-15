import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from './components/Login'
import Home from './components/Home'
import { saveAuthTokens, setAxiosDefaults, removeTokens, userIsLoggedIn } from './util/SessionHeaderUtils'
class App extends Component {

  state = {
    signedIn: false,
  }

  componentDidMount() {
    const signedIn = userIsLoggedIn()
    if (signedIn) {
      setAxiosDefaults()
      this.setState({ signedIn })
    }

  }

  signOut = () => {
    removeTokens()
    this.setState({ signedIn: false })
  }



  signIn = async (email, password) => {
    const payload = {
      email: email,
      password: password
    }
    try {
      const res = await axios.post('/auth/sign_in', payload)
      console.log(res)
      this.setState({ signedIn: true })
      saveAuthTokens(res.headers)

    } catch (error) {
      console.log(error)
    }
  }




  render() {
    const LoginWrapper = (props) => {
      return <Login {...props} signIn={this.signIn} />
    }

    const HomeWrapper = (props) => {
      return <Home {...props} />
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            REDUX BOG APP
          </p>
          <button onClick={this.signOut}>Sign Out</button>

        </header>



        <Router>
          <div>
            <Switch>
              <Route exact path='/login' render={LoginWrapper} />
              <Route exact path='/' render={HomeWrapper} />
            </Switch>
            {this.state.signedIn ? <Redirect to='/' /> : <Redirect to='/login' />}
          </div>
        </Router>
        <br />
        <br />


      </div>
    );
  }
}

export default App;
