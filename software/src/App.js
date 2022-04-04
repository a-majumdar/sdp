import "./App.css";

import React from "react";

import Navbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/ContactUs";
import Explore from "./screens/Explore";
import SignUp from "./screens/SignUp";
import MyProp from "./screens/PropagatorPage";
import Tomato from "./screens/Tomato";
import ProfilePage from "./screens/ProfilePage";
import SearchPage from "./screens/SearchPage";
import tutorial from "./screens/tutorial";
import LogIn from "./screens/Login";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import { PropagatorProvider } from "./contexts/PropagatorContext";
import { PlantDataProvider } from "./contexts/PlantDataContext";
import cucumb from "./screens/articles/art1";
import art2 from "./screens/articles/art2";
import art3 from "./screens/articles/art3";
import art4 from "./screens/articles/art4";
import art5 from "./screens/articles/art5";
import art6 from "./screens/articles/art6";
import art7 from "./screens/articles/art7";
import art8 from "./screens/articles/art8";
import art9 from "./screens/articles/art9";
import art10 from "./screens/articles/art10";
import art11 from "./screens/articles/art11";
import art12 from "./screens/articles/art12";
import art13 from "./screens/articles/art13";
import artest from "./screens/articles/artest";
/**
 * Main Root of Our Website
 * Wrapped around by an AuthProvider to keep track of current user to use anywhere in our application
 * @returns
 */
function App() {
  return (
    <Router>
      <AuthProvider>
        <PlantDataProvider>
          <Navbar></Navbar>
          <Switch>
            <PropagatorProvider>
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/" exact component={Home} />
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/Explore" exact component={Explore} />
              <Route path="/Contact" exact component={Contact} />
              <Route path="/login" exact component={LogIn} />
              <Route path="/searchPage" exact component={SearchPage} />
              <Route path="/tutorial" exact component={tutorial} />
              <Route path="/cucumb" exact component={cucumb} />
              <Route path="/art2" exact component={art2} />
              <Route path="/art3" exact component={art3} />
              <Route path="/art4" exact component={art4} />
              <Route path="/art5" exact component={art5} />
              <Route path="/art6" exact component={art6} />
              <Route path="/art7" exact component={art7} />
              <Route path="/art8" exact component={art8} />
              <Route path="/art9" exact component={art9} />
              <Route path="/art10" exact component={art10} />
              <Route path="/art11" exact component={art11} />
              <Route path="/art12" exact component={art12} />
              <Route path="/art13" exact component={art13} />
              <Route path="/artest" exact component={artest} />
              <Route path="/TomatoSearch" exact component={Tomato} />
              <PrivateRoute path="/profile" exact component={ProfilePage} />
              <Route path="/MyProp" exact component={MyProp} />
            </PropagatorProvider>
          </Switch>
        </PlantDataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
