import { PAGES_URL } from '../../services/Constants'
import { useHistory } from 'react-router-dom'
import { Container, ContainerButton, Button } from './style'
import logo from '../../imgs/logo.png'

const Home = () => {
  const { push } = useHistory()
  return (
    <Container>
      <ContainerButton>
        <img src={logo} alt={'Labex'} />
        <div>
          <Button onClick={() => push(PAGES_URL.TRIP_LIST)}>Ver Viagens</Button>
          <Button onClick={() => push(PAGES_URL.ADMIN_TRIP_LIST)}>
            Área de Admin
          </Button>
        </div>
      </ContainerButton>
    </Container>
  )
}

export default Home
