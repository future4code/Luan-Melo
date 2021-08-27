import { PAGES_URL } from '../../services/Constants'
import { useHistory } from 'react-router-dom'
const Home = () => {
  const { push } = useHistory()
  return (
    <>
      <h1>LabeX</h1>
      <div>
        <button onClick={() => push(PAGES_URL.TRIP_LIST)}>Ver Viagens</button>
        <button onClick={() => push(PAGES_URL.ADMIN_TRIP_LIST)}>
          Área de Admin
        </button>
      </div>
    </>
  )
}

export default Home
