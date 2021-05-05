import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkButton from "./components/LinkButton";
import AllScreen from "./screens/AllScreen";
import ActiveScreen from "./screens/ActiveScreen";
import CompletedScreen from "./screens/CompletedScreen";

function App() {
  return (
    <Router>
      <div className="app">
        <h1 className="app__title">#todo</h1>
        <header className="app__header">
          <LinkButton title="All" />

          <LinkButton title="Active" />

          <LinkButton title="Completed" />
        </header>

        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <AllScreen />
            </Route>

            <Route exact path="/active">
              <ActiveScreen />
            </Route>

            <Route exact path="/completed">
              <CompletedScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
