import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router } from "react-router-dom";

// import * as serviceWorker from "./serviceWorker";
import "../src/css/general-style.css";
import AuthContext from "./context/AuthContext";
ReactDOM.render(
  <AuthContext>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </AuthContext>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
