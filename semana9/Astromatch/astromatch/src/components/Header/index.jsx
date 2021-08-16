import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
    Container,
}
    from "./estilo"

const Header = () => {
    const IsMatchesPage = window.location.pathname.includes('matches')

    return (
        <Container>
           <Logo/>

            {IsMatchesPage ?
                <a href="/">Procurar alguém</a> :
                <a href="/matches">Ver quem deu match</a>
            }
            
        </Container>

    )
}

export default Header