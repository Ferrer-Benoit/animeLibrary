import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Draqula, DraqulaProvider } from "draqula";
import AnimeCardContainer from "./Containers/AnimeCardContainer";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AnimeContainer from "./Containers/AnimeContainer";

const client = new Draqula("https://graphql.anilist.co");

ReactDOM.render(
  <Router>
    <DraqulaProvider client={client}>
      <Switch>
        <Route exact path="/" component={AnimeCardContainer} />
        <Route path="/anime" component={AnimeContainer} />
      </Switch>
    </DraqulaProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
