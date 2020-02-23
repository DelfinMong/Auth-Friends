import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Login from "./component/Login";
import FriendsList from "./component/Friends";
import PrivateRoute from "./PrivateRoute.js/PrivateRoute";
import AddFriend from "./component/AddFriends";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div >
          <NavLink to="/login">Login</NavLink><br/>
          <NavLink to="/friendslist">Friends List</NavLink><br/>
          <NavLink to="/addfriend">Add Friend</NavLink>
        </div>
      </div>
      <Switch>
        <PrivateRoute exact path="/addfriend" component={AddFriend} />
        <PrivateRoute exact path="/friendslist" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>

    </Router>
  );
}

export default App;
