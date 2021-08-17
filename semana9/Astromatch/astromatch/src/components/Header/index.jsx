import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Chat } from '../../assets/chat.svg';
import { ReactComponent as Return } from '../../assets/return.svg';

import {
    Container,
    Button
}
    from "./estilo"

const Header = () => {
    const IsMatchesPage = window.location.pathname.includes('matches')

    return (
        <Container>
            <div>
                {IsMatchesPage && <a href="/"><Button><Return/></Button></a>}
            </div>
            <Logo/>
            <div>
                {!IsMatchesPage && <a href="/matches"><Button><Chat/></Button></a>}          
            </div>
        </Container>

    )
}

export default Header