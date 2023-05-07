import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const useAuth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const isAuth = localStorage.getItem("session");

  return {
    currentUser: isAuth ? user : null,
    isAuthenticated: isAuth,
  };
};
