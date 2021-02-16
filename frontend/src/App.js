import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/index";
import Home from "./components/home";
import Profile from "./components/profile";
//import PrivateRoute from "./router/privateRoute";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/home" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
