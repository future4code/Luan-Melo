import { useTripDetails } from '../../hooks/useTripDetails'

const TripDetailsPage = () => {
  const Details = useTripDetails('darvas', 'NoIFVcOiSgTKTIPVZwXS', localStorage.getItem('token'))
  console.log('Details', Details)

  return <div></div>
}

export default TripDetailsPage
