import axios from "axios"
import React, { useEffect, useState } from "react"
// import Buttons from "../../Buttons"
import MenuApp from "../MenuApp"

import {
    ContainerGeral,
    ContainerPerfil,
    Img
}
    from "./estilo"

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:luan"

const LoadProfile = () => {

    const [person, setPerson] = useState({})
    const { id, name, photo, bio, age } = person

    const personView = async () => {
        const body = {
            "id": id,
            "choice": true
        }

        try {
            const choosePerson = await axios.post(`${url}/choose-person`, body)
            console.log(choosePerson)
        } catch {
            console.log('Error')
        }
    }

    useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:luanmelo/person")
            .then((res) => {
                setPerson(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <ContainerGeral>
            <ContainerPerfil>
                <MenuApp />
                <p>{name}, {age}</p>
                <Img src={photo} value={photo} alt={name} />
                <p>{bio}</p>
                <div>
                    <button onClick={personView}>match</button>
                    <button>delete</button>
                </div>
            </ContainerPerfil>

        </ContainerGeral>
    )
}

export default LoadProfile