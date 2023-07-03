import { useState } from "react";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <div className="element"></div>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
        </ul>
      </div>
      <ul>
        <li>list 1.1</li>
        <li>list 1.2</li>
      </ul>
      <div className="wrapper">HELLO!</div>
    </>
  );
}

export default App;
