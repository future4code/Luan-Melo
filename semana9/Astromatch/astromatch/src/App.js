import './App.css';
import React from 'react';
import Home from './pages/Home/index';
import Header from './components/Header/index'
import Matches from './pages/Matches/index'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  const clearPage = async () => {
    try {
      await axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/clear")
        .then(() => window.location.reload())

    } catch {
      console.log('Error')
    }

  }
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/matches" component={() => <Matches clearPage={() => clearPage()} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
