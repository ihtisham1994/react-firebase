import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";


function App() {

  return (
      <Router>
          <div className="App">
              <Navbar/>
              <div className="content">
                  <Switch>
                      <Route exact path="/">
                          <Home/>
                      </Route>
                      <Route path="/signin">
                          <Signin/>
                      </Route>
                      <Route path="/register">
                          <Signup/>
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
