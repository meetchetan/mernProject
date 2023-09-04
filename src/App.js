import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import Logout from "./components/Logout";
import { initialState, reducer } from "../src/reducer/UseReducer";

// 1: context API
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about-me" element={<About />} />

      <Route exact path="/contact" element={<Contact />} />

      <Route exact path="/signin" element={<Login />} />

      <Route exact path="/register" element={<Signup />} />

      <Route exact path="/logout" element={<Logout />} />

      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
