import React, { useState } from "react";
import "./App.scss";
import { Switch, Route, useHistory } from "react-router-dom";
import LinkButton from "./components/LinkButton";
import AllScreen from "./screens/AllScreen";
import ActiveScreen from "./screens/ActiveScreen";
import CompletedScreen from "./screens/CompletedScreen";

function App() {
  const history = useHistory();
  const [path, setPath] = useState("/");

  history.listen(({ pathname }) => {
    setPath(pathname);
  });

  return (
    <div className="app">
      <h1 className="app__title">#todo</h1>
      <header className="app__header">
        <LinkButton title="All" active={path === "/" ? true : false} />

        <LinkButton title="Active" active={path === "/active" ? true : false} />

        <LinkButton
          title="Completed"
          active={path === "/completed" ? true : false}
        />
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
      <p className="app__createBy">
        created by <span className="app__userName">trca1996</span> -
        devChallenges.io
      </p>
    </div>
  );
}

export default App;
