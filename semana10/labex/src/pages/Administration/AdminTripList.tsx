import { useHistory } from 'react-router'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import { useTripList } from '../../hooks/useTripList'
import { PAGES_URL } from '../../services/Constants'

const AdminTripList = () => {
  const { push, goBack } = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    push(PAGES_URL.LOGIN)
  }

  const { data, loading } = useTripList()

  const handleTripDetail = (id: string) => {
    push({
      pathname: `/admin/trips/${id}`,
      state: { id }
    })
  }

  const handleExcludeTrip = (id: string) => {
    console.log('excluir')
  }

  return (
    <PrivateRoute>
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

      {loading ? (
        <>Carregando...</>
      ) : (
        data?.map(({ name, id }, index) => {
          return (
            <div key={index}>
              <span onClick={() => handleTripDetail(id)}>{name}</span>
              <button onClick={() => handleExcludeTrip(id)}>Excluir</button>
            </div>
          )
        })
      )}
    </PrivateRoute>
  )
}

export default AdminTripList
