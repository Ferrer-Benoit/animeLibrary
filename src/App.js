import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AnimeCardContainer from "./Containers/AnimeCardContainer";
import AnimeContainer from "./Containers/AnimeCardContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <AnimeCardContainer /> */}
 
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  );
}

export default App;
