import './App.css';
import React from 'react';
import Home from './pages/Home/index';
import Matches from './pages/Matches/index'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
  flex-direction: column;

`

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
    <Container>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={() => <Home clearPage={() => clearPage()} />} />
          <Route exact path="/matches" component={() => <Matches clearPage={() => clearPage()} />} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
