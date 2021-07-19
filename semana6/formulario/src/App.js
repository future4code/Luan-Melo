import './App.css';
import React from 'react'
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';

class App extends React.Component{

  state = {
    etapa: 1
  }

  verifyStepSkip = () => {
    const etapaSkip = this.state.etapa
    if (etapaSkip === 1){
      return <Etapa1/>;
    } else if (etapaSkip === 2){
      return <Etapa2/>;
    } else if (etapaSkip === 3){
      return <Etapa3/>;
    } else if (etapaSkip === 4){
      return <Etapa4/>;
    } 
  }

  setSkip = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render() {
      return (

        <div className="App">
            {this.verifyStepSkip()}
            {this.state.etapa !== 4 && (
              <button onClick={this.setSkip}>Próxima Etapa</button>
            )}
        </div>
      );
  }
}

export default App;
