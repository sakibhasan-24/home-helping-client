import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const userLogOut = () => {
    setLoading(false);
    return signOut(auth);
  };
  useEffect(() => {
    const clearMemory = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("no current User");
      }
      setLoading(true);
      setUser(user);
    });
    return () => clearMemory();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, loading, createUser, userLogIn, googleLogIn, userLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
