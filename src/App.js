/* eslint-disable */
import React, { Component } from "react";
import Calculator from "./components/calculator";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quote from "./Pages/Quote";
import NavBar from "./components/NavBar";
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Calculator"
              element={
                <div className="calc-page">
                  <strong> Let's Do some Math!</strong>
                  <Calculator />
                </div>
              }
            />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </>
    );
  }
}
