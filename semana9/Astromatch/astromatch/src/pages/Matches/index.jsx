import React, { useState, useEffect } from 'react'
import axios from "axios"
import { ContainerPerfil, MatchesContainer, MatchesProfile, Button } from '../Matches/estilo'
import Headers from '../../components/Header/index'
import { ReactComponent as Restart } from '../../assets/restart.svg';

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
            <Headers />
            <MatchesContainer>
                {matches.map((profile) => <MatchesProfile key={profile.name}>
                    <div>
                        <img src={profile.photo} alt={profile.name} />
                    </div>
                    <p>{profile.name}</p>

                </MatchesProfile>)}
            </MatchesContainer>
            <div>
                <Button onClick={props.clearPage}><Restart /></Button>
            </div>
        </ContainerPerfil>
    )
}

export default Matches