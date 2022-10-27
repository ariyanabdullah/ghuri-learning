import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const Mycontext = createContext();
const auth = getAuth(app);

const Authcontext = ({ children }) => {
  // dark mode
  const [darkMode, setDarkMode] = useState(true);
  // handle theme dark and light
  const handleDarkTheme = () => {
    setDarkMode(false);
  };

  const handleLightTheme = () => {
    setDarkMode(true);
  };

  // loading

  const [loading, setLoading] = useState(true);

  // === Create User ===
  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // === Login User ===
  const loginUser = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // === Updet User Profile ===
  const updateUserProfile = (profile) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // === SignOut USer ===
  const userSignOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  // === Create User with Google ===
  const googleUser = (provider) => {
    // setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //== create user with github==
  const githubUser = (provider) => {
    // setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // === User Control ===
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  const allInfo = {
    createUser,
    loginUser,
    googleUser,
    updateUserProfile,
    userSignOut,
    githubUser,
    user,
    loading,
    handleDarkTheme,
    darkMode,
    handleLightTheme,
  };
  return <Mycontext.Provider value={allInfo}>{children}</Mycontext.Provider>;
};

export default Authcontext;
