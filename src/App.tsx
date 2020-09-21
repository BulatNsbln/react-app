import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Home from "./pages/Home/Home";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
