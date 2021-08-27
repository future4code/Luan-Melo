import { useHistory } from 'react-router'
import { PAGES_URL } from '../../services/Constants'

const AdminTripList = () => {
  const { push, goBack } = useHistory()
  const handleLogout = () => {
    console.log('logout')
    localStorage.removeItem('token')
  }

  return (
    <div>
      <h1>AdminTripList</h1>
      <div>
        <button onClick={() => goBack()}>Voltar</button>
      </div>
      <div>
        <button onClick={() => push(PAGES_URL.ADMIN_CREATE_TRIP)}>
          Criar Viagem
        </button>
      </div>
      <div>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    </div>
  )
}

export default AdminTripList
