import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import Awards from './pages/Awards';
import About from './pages/About';
import Users from './pages/Users';
import Reset from './pages/Reset';


import AuthContext from './context/auth-context';
import './App.css';
//import './style.scss';


class App extends Component {
  state = {
    firstName: null,
    lastName: null,
    userRole: null,
    token: null,
    _id: null,
    isAdmin: false
  };

  login = (token, _id, firstName, lastName, userRole, tokenExpiration) => {
    let isAdmin = null
    let role = userRole.map(element => element.role);
    role.includes("admin") ? isAdmin = true : isAdmin = false;

    let data = { token: token, _id: _id, firstName: firstName, lastName: lastName, userRole: userRole }
    let dataDup = JSON.stringify(data)
    localStorage.setItem("userData", dataDup);
    this.setState({ token: token, _id: _id, firstName: firstName, lastName: lastName, userRole: userRole, isAdmin: isAdmin });
  };

  logout = () => {
    localStorage.removeItem("userData");
    this.setState({ token: null, _id: null, firstName: null, lastName: null, userRole: null });
  };

  render() {
    return (
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            token: this.state.token,
            _id: this.state._id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userRole: this.state.userRole,
            isAdmin: this.state.isAdmin,
            login: this.login,
            logout: this.logout
          }}>
          <Switch>
            {!this.state.token && <Redirect from="/" to="/login" exact />}
            {!this.state.token && <Redirect from="/awards" to="/login" exact />}
            {!this.state.token && <Redirect from="/about" to="/login" exact />}
            {!this.state.token && <Redirect from="/users" to="/login" exact />}

            {this.state.token && <Redirect from="/login" to="/awards" exact />}
            {this.state.token && <Redirect from="/" to="/awards" exact />}

            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/awards" component={Awards} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/reset-password/:refreshTokenForPassword" component={Reset} />
          </Switch>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;