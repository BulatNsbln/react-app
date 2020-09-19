import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';

import styles from './App.module.scss';

function App(): JSX.Element {
  return (
    <>
      <div className={styles.title}>Hello, World!</div>
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
