import "./App.css";
import React from "react";
import Navbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/ContactUs";
import Explore from "./screens/Explore";
import SignUp from "./screens/SignUp";
import ProfilePage from "./screens/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";

import { AuthProvider } from "./contexts/AuthContext";
import LogIn from "./screens/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/Explore" exact component={Explore} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/login" exact component={LogIn} />
          <PrivateRoute path="/profile" exact component={ProfilePage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
