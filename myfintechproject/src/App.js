import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./component/AxiosComponent";
import ListComponent from "./component/ListComponent";
import AuthResultPage from "./pages/AuthResultPage";
import BalancePage from "./pages/BalancePage";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import QrCodePage from "./pages/QrCodePage";
import QrReader from "./pages/QrReader";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/axios" exact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
