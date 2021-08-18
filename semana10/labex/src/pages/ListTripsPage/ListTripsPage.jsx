import React from 'react'
import styled from 'styled-components'
import { Switch, Route, useHistory } from 'react-router-dom'
import SignUpTrip from '../../components/SignUpTrip'

const Container = styled.div`
  height: 100vh;
  background-color: blue;
  h1 {
    color: white;
    text-align: center;
  }
`

const ListTripsPage = () => {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  return (
    <Container>
      <h1>ListTripsPage</h1>
      <button onClick={goBack}>Voltar</button>

      <a href="listTrips/application">
        <div>
          <button>Cadastrar</button>
        </div>
      </a>
      <Switch>
        <Route exact path="listTrips/application" component={SignUpTrip} />
      </Switch>
    </Container>
  )
}

export default ListTripsPage
