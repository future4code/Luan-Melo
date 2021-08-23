import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useTripList } from '../../hooks/useTripList'
import { PAGES_URL } from '../../services/Constants'

const Container = styled.div`
  min-height: 100vh;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  h1 {
    color: white;
    text-align: center;
    font-size: 25px;
  }
`

const TripsList = () => {
  const { goBack, push } = useHistory()
  const data = useTripList()

  return (
    <Container>
      <div>
        <button onClick={() => goBack()}>Voltar</button>
        <button onClick={() => push(PAGES_URL.SIGNUP_TRIP)}>
          Inscrever-se
        </button>
      </div>
      <h1>Lista de Viagens</h1>

      {data?.map(
        ({ name, description, planet, durationInDays, date }, index) => {
          return (
            <div key={index}>
              <p>Name: {name}</p>
              <p>Description: {description}</p>
              <p>Planet:{planet}</p>
              <p>Duration: {durationInDays}</p>
              <p>Date: {date}</p>
            </div>
          )
        }
      )}
    </Container>
  )
}

export default TripsList
