
import axios from "axios"
import React, { useEffect, useState } from "react"

const Button = () => {

    

    useEffect(() => {
        const body = {
            "id": id,
            "choice": true
        }

        axios.post(`${url}/choose-person`, body)
            .then((res) => {
                // setPerson(res.data.profile)
                console.log(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <button onClick={onChangeInput}>match</button>
            <button>delete</button>
        </div>

    )
}

export default Button;