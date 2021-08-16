import React, { useState, useEffect } from 'react'
import axios from "axios"
import { ContainerPerfil } from '../Matches/estilo'

const Matches = (props) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = async () => {
        await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/matches")
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <ContainerPerfil>
            {matches.map((profile) => <div key={profile.name}>{profile.name}</div>)}
            <button onClick={props.clearPage}>Limpar</button>
        </ContainerPerfil>
    )
}

export default Matches