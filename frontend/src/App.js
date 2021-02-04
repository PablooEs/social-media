import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Index from './components/index';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
