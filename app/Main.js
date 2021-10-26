import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from "./components/Form";
import Results from "./components/ResultsProps.js";

function App() {
  const initialState = {
    buttonA: false,
    buttonB: false,
    buttonC: false,
    buttonD: false
  };

  const [checked, setChecked] =
    useState(initialState);

  return (
    <BrowserRouter>
      <div>
        <main>
          <div className="display-flex-ai-jc heading-banner">
            <h1>Hello World</h1>
          </div>
          <Switch>
            <Route exact path="/">
              <Form
                checked={checked}
                setChecked={setChecked}
              />
            </Route>
            <Route exact path="/results">
              <Results
                checked={checked}
                setChecked={setChecked}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#app")
);
