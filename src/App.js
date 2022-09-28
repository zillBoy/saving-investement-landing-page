/**
 * React Dependencies
 */
import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      {Array.from(Array(100).keys()).map((e) => (
        <p>hlelo</p>
      ))}
      <p>Hello</p>
    </>
  );
};

export default App;
