import './App.css';
import React from 'react'
import axios from 'axios';

class App extends React.Component {

  state = {
    mission: []
  }

  componentDidMount() {
    this.getMissions()
  }

  getMissions = async () => {
    try {
      const res = await axios.get("https://api.spacexdata.com/v3/missions")
      this.setState({ mission: res.data })
    } catch (err) {
      alert('error')
    }
  }

  render() {
    const list = this.state.mission.map(({mission_id, mission_name, manufacturers, wikipedia}) => {
      return (
        <div key={mission_id}>  
            <span>
              <p>{mission_name}</p>
              <p>{manufacturers}</p>
              <a href={wikipedia}>Wikipedia</a>
            </span>
            <hr/>
        </div>
      ) 
    })
    return (
      <div className="App">
          <h1>Missões</h1>
          {list}
      </div>
    );
  }
}
export default App;
