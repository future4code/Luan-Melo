import React from 'react'
import Routes from './routes/Routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

`

const App = () => (
  <>
    {' '}
    <GlobalStyle /> <Routes />{' '}
  </>
)
export default App
