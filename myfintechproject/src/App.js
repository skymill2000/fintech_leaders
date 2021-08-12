import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <AxiosTest></AxiosTest>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
