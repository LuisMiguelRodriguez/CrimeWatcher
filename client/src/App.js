import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Main from './components/pages/Main'
import FindForm from "./components/findform";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <FindForm />
    </div>
  </Router>;

export default App;
