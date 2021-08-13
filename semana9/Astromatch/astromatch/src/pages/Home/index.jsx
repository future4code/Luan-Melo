import axios from "axios"
import React, { useEffect, useState } from "react"
// import Buttons from "../../Buttons"

import {
    ContainerGeral,
    ContainerPerfil,
    Img
}
    from "./estilo"

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan"

const Home = (props) => {
    const [person, setPerson] = useState({})
    const [isLoading, setLoading] = useState(false)
    const { id, name, photo, bio, age } = person

    useEffect(() => {
        getPerson()
    }, [])

    const getPerson = async () => {
        setLoading(true)
        await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/person")
            .then((res) => {
                res.data.profile.id && setPerson(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
        setLoading(false)
    }

    const personView = async (value) => {
        const body = {
            "id": id,
            "choice": value
        }

        try {
            const choosePerson = await axios.post(`${url}/choose-person`, body)
            console.log(choosePerson)
        } catch {
            console.log('Error')
        }
        getPerson()
    }

    return (
        <ContainerGeral>
            <ContainerPerfil>
                {
                    isLoading ? 
                        <h1>Loading</h1> 
                        : 
                        id ?
                            (
                                <>
                                    <p>{name}, {age}</p>
                                    <Img src={photo} value={photo} alt={name} />
                                    <p>{bio}</p>
                                    <div>
                                        <button onClick={() => personView(true)}>match</button>
                                        <button onClick={() => personView(false)}>delete</button>
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    <h1>We have no more suggestions</h1>
                                    <button onClick={() => props.clearPage()}>Reset</button>
                                </>
        
                            )
                    
                }
            </ContainerPerfil>
        </ContainerGeral>
    )
}

export default Home