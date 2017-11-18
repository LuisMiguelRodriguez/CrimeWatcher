import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Main from './components/pages/Main'
import Analytics from './components/Analytics'

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/analytics" component={Analytics} />
      </Switch>
    </div>
  </Router>;

export default App;
