import { useState, useEffect } from 'react'
import { ITrips } from '../services/Interfaces'
import { doGetTrip } from '../services/RequestApi'

export function useTripList() {
  const [data, setData] = useState<ITrips[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchList() {
      setLoading(true)
      const response = await doGetTrip()
      response?.trips && setData(response.trips)
      setLoading(false)
    }
    fetchList()
  }, [])

  return { data, loading }
}
