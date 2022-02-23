import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { Route } from "react-router-dom";

/**
 * Creates a private Route for if a User is currently logged in
 * @param {Takes a route components as a prop which can adapt if we want to create more than one private routes} param0
 * @returns The private route, else redirects to the HomePage
 */
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext); //Current user taken from our AuthContext.

  //Creates a private route, if there is a current user then we allow user to go to the route
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
