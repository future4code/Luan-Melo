import axios from "axios"
import React, { useEffect, useState } from "react"
// import Buttons from "../../Buttons"
import MenuApp from "../MenuApp"

import {
    ContainerGeral,
    ContainerPerfil,
    Img,
}
    from "./estilo"

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:luan"

const LoadProfile = () => {
    const [person, setPerson] = useState({})
    const { id, name, photo, bio, age } = person

    useEffect(() => {
        getPerson()
    }, [person])

    const getPerson = async () => {
        await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:luan/person")
            .then((res) => {
                setPerson(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const personView = async (value) => {
        const body = {
            "id": id,
            "choice": value
        }

        try {
            await axios.post(`${url}/choose-person`, body)
            getPerson()
        } catch {
            console.log('Error')
        }
    }

    return (
        <ContainerGeral>
            <ContainerPerfil>
                <MenuApp />

                <p>{name}, {age}</p>
                <Img src={photo} value={photo} alt={name} />
                <p>{bio}</p>
                <div>
                    <button onClick={() => personView(true)}>match</button>
                    <button onClick={() => personView(false)}>delete</button>
                </div>
            </ContainerPerfil>
        </ContainerGeral>

    )
}

export default LoadProfile