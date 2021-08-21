import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTripList } from '../../hooks/useTripList'

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

const ListTripsPage = () => {
  const data = useTripList()

  const mapear = data?.map(
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
  )

  return (
    <Container>
      <h1>ListTripsPage</h1>
      {mapear}
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <div>
        <Link to="/applicationform">Se cadastrar</Link>
      </div>
    </Container>
  )
}

export default ListTripsPage
