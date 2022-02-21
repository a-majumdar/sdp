import React, { useContext, useState } from "react";
import { addUserPropagatorRelations, auth } from "../firebase/firebase-config";
import { useEffect } from "react";
import { db } from "../firebase/firebase-config";
import SignUp from "../screens/SignUp";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userPropId, setUserPropId] = useState();
  const [loading, setLoading] = useState(true);
  const [isLinked, setIsLinked] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      addUserPropagatorRelations(user.uid, 12);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isLinked,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
