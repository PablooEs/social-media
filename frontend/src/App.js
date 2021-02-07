import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/index";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
