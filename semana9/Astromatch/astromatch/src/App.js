import './App.css';
import React from 'react';
import Home from './pages/Home/index';
import Header from './components/Header/index'
import Matches from './pages/Matches/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/matches" component={Matches} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
