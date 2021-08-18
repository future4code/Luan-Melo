import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {

  const history = useHistory() 

  const irParaLa = () => {
    history.push('listTrips')
  }

  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={irParaLa}>Ir pra lá</button>
    </div>
  )
}

export default HomePage
