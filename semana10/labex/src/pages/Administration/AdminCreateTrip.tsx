import { useHistory } from 'react-router'

const AdminCreateTrip = () => {
  const { goBack } = useHistory()
  const handleCreateTrip = () => {
    console.log('create trip')
  }

  return (
    <div>
      <h1>AdminCreateTrip</h1>
      <div>
        <button onClick={() => goBack()}>Voltar</button>
        <button onClick={() => handleCreateTrip()}>Criar</button>
      </div>
    </div>
  )
}

export default AdminCreateTrip
