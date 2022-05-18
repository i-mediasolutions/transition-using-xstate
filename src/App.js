import React from "react";
import Pathway from "./components/pathway";
import Logic from "./components/logic";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Link to="/">
        <button type="button">Go Home</button>
      </Link>
      &nbsp;&nbsp;
      <Link to="/pathway">
        <button type="button">Begin Pathway</button>
      </Link>
      &nbsp;&nbsp;
      <Link to="/logic">
        <button type="button">Logic</button>
      </Link>
      <Switch>
        <Route exact path="/logic">
          <Logic />
        </Route>
        <Route exact path="/pathway">
          <Pathway />
        </Route>
      </Switch>
    </Router>
  );
}
