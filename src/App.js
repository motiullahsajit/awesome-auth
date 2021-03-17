
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Header from './components/Header';
import Home from "./components/Home";
import PrivateRoute from './components/PrivateRoute';
import Profile from "./components/Profile";
import Register from './components/Register';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
