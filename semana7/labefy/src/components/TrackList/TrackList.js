import React from 'react'
import axios from 'axios'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
const headers = {
    headers: {
        Authorization: "luan-melo-lovelace"
    }
}

class TrackList extends React.Component {

    state = {
        trackPlayList: []
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

    render() {

        const trackList = this.state.trackPlayList.map(({ name }, index) => {
            return (
                <div key={index}>
                    <li>{name}</li>
                </div>
            )
        })

        return (
            <div>
                {trackList}
            </div>

        )
    }
}

export default TrackList;