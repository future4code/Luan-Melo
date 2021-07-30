import axios from 'axios';
import React from 'react';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers: {
        Authorization: "luan-melo-lovelace"
    }
}

class CreatePlayList extends React.Component {

    state = {
        name: '',
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    creaPlayList = () => {
        const body = {
            name: this.state.name
        }
        axios.post(url, body, headers)
            .then((res) => {
                alert('Música cadastrada com sucesso.')
                this.setState({ name: '' })
            })
            .catch((err) => {
                // alert(err.response)
            })
    }

    render() {
        return (
            <div className="App">
                <input
                    value={this.state.name}
                    onChange={this.onChangeName}
                    type="text"
                    placeholder="digite o nome da música"
                />
                <button onClick={this.creaPlayList}>Salvar Música</button>
            </div>
        );
    }
}

export default CreatePlayList;
