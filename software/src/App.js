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
import ProfilePage from "./screens/ProfilePage";
import SearchPage from "./screens/SearchPage";
import LogIn from "./screens/Login";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import { PropagatorProvider } from "./contexts/PropagatorContext";
import { PlantDataProvider } from "./contexts/PlantDataContext";

/**
 * Main Root of Our Website
 * Wrapped around by an AuthProvider to keep track of current user to use anywhere in our application
 * @returns
 */
function App() {
  return (
    <Router>
      <Route path="/Explore" exact component={Explore} />
      <AuthProvider>
        <PlantDataProvider>
          <Navbar></Navbar>
          <Switch>
            <PropagatorProvider>
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/" exact component={Home} />
              <Route path="/about-us" exact component={AboutUs} />

              <Route path="/Contact" exact component={Contact} />
              <Route path="/login" exact component={LogIn} />
              <Route path="/searchPage" exact component={SearchPage} />
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
