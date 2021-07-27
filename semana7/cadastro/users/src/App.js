import React from "react"
// import axios from "axios";
import Cadastro from "./components/Cadastro/Cadastro";
import ListUser from "./components/ListUser/ListUser";

class App extends React.Component {
  state = {
    pageStart: true
  }

  onChangePage = () => { 
     this.setState({pageStart: !this.state.pageStart})
  }

  render() {
    return (
      <div>

          {/* <Cadastro/> */}
          {this.state.pageStart ? <Cadastro/> : <ListUser/>}
          <button onClick={this.onChangePage}>Acessar Lista</button>
      </div>
    );
  }
}
export default App;
