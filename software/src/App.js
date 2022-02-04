import "./App.css";
import React from "react";
import Navbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/ContactUs";
import Explore from "./screens/Explore";
import SignUp from "./screens/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/Explore" exact component={Explore} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
