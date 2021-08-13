import React, { useState, useEffect } from 'react'
import axios from "axios"


const Matches = () => {
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

    console.log('matches', matches)

    return (
        <>
            {matches.map((profile) => <div key={profile.name}>{profile.name}</div>)}
        </>
    )
}

export default Matches