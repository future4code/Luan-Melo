import './App.css';
import React from 'react';
import CreatePlayList from './components/CreatePlayList/CreatePlayList';
import PlayList from './components/PlayList/PlayList';
import AdicionarPlayList from './components/AdicionarPlayList/AdicionarPlayList'
// import TrackList from './components/TrackList/TrackList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <CreatePlayList/>
          <PlayList/>
          <AdicionarPlayList/>
          {/* <TrackList/> */}
      </div>
    );
  }
}

export default App;
