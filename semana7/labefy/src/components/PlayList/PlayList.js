import React from 'react';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
// import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components'

const ButtonContainer = styled.button`
    border: none;
    outline: 0;
    background-color: transparente;

`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers: {
        Authorization: "luan-melo-lovelace"
    }
}

class PlayList extends React.Component {

    state = {
        listPlay: [],
        trackPlayList: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try {
            const res = await axios.get(url, headers)
            this.setState({ listPlay: res.data.result.list })
            // console.log(res.data)
        } catch (err) {
            alert("Erro desconhecido, entre em contato com a administração.")
        }
    }

    getPlaylistTracks = async () => {
        try {
            const res = await axios.get(url, headers)
            this.setState({ trackPlayList: res.data.result.list })
            console.log(res.data)
        } catch (err) {
            console.log('error')
        }
    }

    deletePlayList = (id) => {
        if (window.confirm('Você deseja apagar está playlist? ')) {
            axios.delete(`${url}/${id}`, headers)
                .then((res) => {
                    alert('Sucesso!')
                    this.getAllPlaylists()
                    this.getPlaylistTracks()
                })
        }
    }

    render() {
        const playList = this.state.listPlay.map(({ id, name }, index) => {
            return (
                <div key={index}>
                    <li>{name}</li>
                    <ButtonContainer onClick={() => this.deletePlayList(id)}><DeleteIcon /></ButtonContainer>
                </div>
            )
        })

        return (
            <div className="App">
                <h1>Titulo</h1>
                {playList}
            </div>
        );
    }
}

export default PlayList;
