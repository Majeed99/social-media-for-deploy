import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";

import Posts from "./components/Posts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <div className="pageContent">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Posts" component={Posts} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
