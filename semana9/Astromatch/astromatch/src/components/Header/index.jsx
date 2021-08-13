import React from 'react'


const Header = (props) => {
    const IsMatchesPage = window.location.pathname.includes('matches')

    return (
        <div>
            {IsMatchesPage ?
                <a href="/">Procurar alguém</a> :
                <a href="/matches">Ver quem deu match</a>
            }
        </div>

    )
}

export default Header