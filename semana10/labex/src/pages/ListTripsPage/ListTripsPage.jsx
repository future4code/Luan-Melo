import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  background-color: blue;
  h1{
    color: white;
    text-align: center;

  }
`

const ListTripsPage = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <h1>ListTripsPage</h1>
      <button onClick={goBack}>Voltar</button>
    </Container>
  )
}

export default ListTripsPage
