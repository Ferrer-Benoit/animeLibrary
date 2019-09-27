import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Draqula, DraqulaProvider } from "draqula";
import 'bootstrap/dist/css/bootstrap.min.css';

import AnimMainContainer from "./Containers/AnimMainContainer";
import AnimeContainer from "./Containers/AnimeContainer";
import CategoryContainer from "./Containers/CategoryContainer";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const client = new Draqula("https://graphql.anilist.co", { cache: false});

ReactDOM.render(
  <Router>
  <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
    <DraqulaProvider client={client}>
      <Switch>
        <Route exact path="/" component={AnimMainContainer} />
        <Route path="/anime" component={AnimeContainer} />
        <Route path="/category" component={CategoryContainer} />
      </Switch>
    </DraqulaProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
