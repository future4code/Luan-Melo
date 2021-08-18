import React from 'react'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const history = useHistory()

  const irParaLa = () => {
    history.push('listTrips')
  }

  const voltarDeLa = () => {
    history.push('/')
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        <button type="button" onClick={irParaLa}>
          Ir pra lá
        </button>
      </div>
      <div>
        <button onClick={voltarDeLa}>admin page</button>
      </div>
    </div>
  )
}

export default HomePage
