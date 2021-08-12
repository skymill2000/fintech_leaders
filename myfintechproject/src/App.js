import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthResultPage from "./pages/AuthResult";
import AxiosTest from "./pages/AxiosTest";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage></MainPage>
        </Route>
        <Route path="/test" exact>
          <AxiosTest></AxiosTest>
        </Route>
        <Route path="/authResult" exact>
          <AuthResultPage></AuthResultPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
