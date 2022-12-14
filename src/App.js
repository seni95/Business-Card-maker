import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';


function App({ FileInput, authService,cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" key='dlsjfldskj'>
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker cardRepository={cardRepository} FileInput={FileInput} authService={authService} key='dlsjfldskjfdf' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
