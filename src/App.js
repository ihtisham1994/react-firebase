import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import AuthProvider from "./contexts/AuthContext";


function App() {

  return (
      <Router>
          <div className="App">
              <Navbar/>
              <div className="content">
                  <AuthProvider>
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/login" component={Login} />
                          <Route exact path="/register" component={Signup} />
                      </Switch>
                  </AuthProvider>
              </div>
          </div>
      </Router>
  );
}

export default App;
