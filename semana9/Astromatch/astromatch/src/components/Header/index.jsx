import axios from 'axios'
import React, { useEffect } from 'react'


const Header = () => {
    const IsMatchesPage = window.location.pathname.includes('matches')

    console.log(IsMatchesPage)

    const clearPage = async () => {
        try {
            await axios
                .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/clear")
            
        } catch {
            console.log('Error')
        }
        
    }

    // useEffect(() => {
    // }, [])

    return (
        <div>
            {IsMatchesPage ?
                <a href="/">Procurar alguém</a> :
                <a href="/matches">Ver quem deu match</a>
            }

            <div>
                {IsMatchesPage ?
                    <button onClick={clearPage}>Esvaziar Página</button> : null}
            </div>
        </div>

    )
}

export default Header