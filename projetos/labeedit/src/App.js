import React from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes/Routes";

const GlobalSytle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        background-color: #31353b;
    }

    h1{
      color: white;
      text-align: center;
    }

`;

const App = () => (
  <div>
    <GlobalSytle />
    <Routes />
  </div>
);

export default App;
