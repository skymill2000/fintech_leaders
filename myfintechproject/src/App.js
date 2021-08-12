import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          테스트
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
