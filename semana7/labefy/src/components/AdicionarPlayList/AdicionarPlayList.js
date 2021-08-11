import React from 'react'
import axios from 'axios'
import SendIcon from '@material-ui/icons/Send';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"
const headers = {
    headers: {
        Authorization: "luan-melo-lovelace"
    }
}

class AddPlayList extends React.Component {

    state = {
        nameMusic: '',
        nameArtist: '',
        urlMusic: '',

    }

    onChangeNameMusic = (event) => {
        this.setState({ nameMusic: event.target.value })
    }

    onChangeNameArtist = (event) => {
        this.setState({ nameArtist: event.target.value })
    }

    onChangeUrlMusic = (event) => {
        this.setState({ urlMusic: event.target.value })
    }

    addTrackToPlaylist = (playlistId) => {
        const body = {
            name: this.state.nameMusic,
            artist: this.state.nameArtist,
            url: this.state.urlMusic
        }

        axios.post(`${url}/${playlistId}`, body, headers)
            .then((res) => {
                this.setState({ nameMusic: '', nameArtist: '', urlMusic: '' })
            }).catch((err) => {
                alert(err.response)
            })
    }

    render() {

        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.nameMusic}
                        onChange={this.onChangeNameMusic}
                        placeholder="Nome da música"
                    />
                    <input
                        type="text"
                        value={this.state.nameArtist}
                        onChange={this.onChangeNameArtist}
                        placeholder="Nome do artista"
                    />

                    <input
                        type="text"
                        value={this.state.urlMusic}
                        onChange={this.onChangeUrlMusic}
                        placeholder="Url do vídeo"
                    />

                    <button onClick={() => this.addTrackToPlaylist()}><SendIcon /></button>
                </form>
            </div>
        )
    }
}

export default AddPlayList;