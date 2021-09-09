import { useLocation } from 'react-router-dom'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import { useTripDetails } from '../../hooks/useTripDetails'
interface LocationState {
  id: string
}

const AdminTripDetails = () => {
  const location = useLocation<LocationState>()
  const { id } = location.state
  const token = localStorage.getItem('token') || ''
  const { data, loading } = useTripDetails({ id, token })

  console.log('Detail:', data)
  return (
    <PrivateRoute>
      {loading ? (
        'Carregando'
      ) : (
        <>
          <div>
            <h1>{data?.name}</h1>
          </div>
        </>
      )}
    </PrivateRoute>
  )
}

export default AdminTripDetails
