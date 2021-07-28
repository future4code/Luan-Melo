import React from "react"
// import axios from "axios";
import styled, {createGlobalStyle} from "styled-components";
import Cadastro from "./components/Cadastro/Cadastro";
import ListUser from "./components/ListUser/ListUser";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`
const Container = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;

    button{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
      height: 40px;
      width: 135px;
      border: none;
      color: white;
      outline: 0;
    }

    button:hover{
      background-color: transparent;
      border: 1px solid white;
    }
`

class App extends React.Component {
  state = {
    pageStart: true,
  }

  onChangePage = () => { 
     this.setState({pageStart: !this.state.pageStart})
  }
  render() {
    return (
      <div>
          <GlobalStyle/>
          <Container>
            {this.state.pageStart 
            ? <button onClick={this.onChangePage}>Acessar Lista<ArrowForwardIcon/></button> 
            : <button onClick={this.onChangePage}>Voltar Lista<ArrowBackIcon style={{margin: "0 10px"}}/></button>}
          </Container>
          {this.state.pageStart ? <Cadastro/> : <ListUser/>}
      </div>
    );
  }
}
export default App;
