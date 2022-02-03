import "./App.css";
import React from "react";
import Navbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/ContactUs";
import Explore from "./screens/Explore";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Explore" exact component={Explore} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
