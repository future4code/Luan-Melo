import axios from "axios"
import React, { useEffect, useState } from "react"
import { DiamonLoading } from 'react-loadingg'
// Icons Material

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ReactComponent as Hearth } from '../../assets/hearth.svg';
import { ReactComponent as Cancel } from '../../assets/cancel.svg';
import { ReactComponent as Restart } from '../../assets/restart.svg';
import Headers from '../../components/Header/index'

import {
    ContainerGeral,
    ContainerPerfil,
    Img,
    Button,
    VoidProfile

}
    from "./estilo"

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan"

const Home = (props) => {
    const [person, setPerson] = useState({})
    const [isLoading, setLoading] = useState(false)
    const { id, name, photo, bio, age } = person
    const [classAnimation, setClassAnimation] = useState(undefined)

    useEffect(() => {
        getPerson()
    }, [])

    const getPerson = async () => {
        setLoading(true)
        setClassAnimation(undefined)
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
        value ? setClassAnimation('roll-out-right') : setClassAnimation('roll-out-left')
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
            <Headers />
            <>
                {
                    isLoading ?
                        <DiamonLoading color="#DD3A32" />
                        :
                        id ?
                            (
                                <>
                                    <ContainerPerfil className={classAnimation}>
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
                                        <Button onClick={() => personView(false)}>
                                            <Cancel />
                                        </Button>
                                        <Button onClick={() => personView(true)}>
                                            <Hearth />
                                        </Button>
                                    </div>
                                </>
                            )
                            :
                            (
                                <VoidProfile>
                                    <h1>We have no more suggestions</h1>
                                    <Button onClick={props.clearPage}><Restart title="restart" /></Button>
                                </VoidProfile>

                            )

                }
            </>
        </ContainerGeral>

    )
}

export default Home