import axios from "axios"
import React, { useEffect, useState } from "react"

// Icons Material

import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ReactComponent as Hearth } from '../../assets/hearth.svg';
import { ReactComponent as Cancel } from '../../assets/cancel.svg';

import {
    ContainerGeral,
    ContainerPerfil,
    Img,
    Button,

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
                res.data?.profile?.id && setPerson(res.data.profile)
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
            <>
                {
                    isLoading ?
                        <h1>Loading</h1>
                        :
                        id ?
                            (
                                <>
                                    <ContainerPerfil>
                                        <div>
                                            <Img src={photo} value={photo} alt={name} />

                                        </div>
                                        <div>
                                            <p><strong>{name}</strong>, {age}</p>
                                            <CheckCircleIcon style={{ color: "#3a63ab" }} />
                            
                                        </div>
                                        <div>
                                            <p>{bio}</p>
                                        </div>
                                    </ContainerPerfil>
                                    <div>
                                        <Button onClick={() => personView(true)}>
                                            <Hearth />
                                        </Button>
                                        <Button onClick={() => personView(false)}>
                                            <Cancel />
                                        </Button>
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    <h1>We have no more suggestions</h1>
                                    <button onClick={props.clearPage}><ThreeSixtyIcon /></button>
                                </>

                            )

                }
            </>
        </ContainerGeral>

    )
}

export default Home