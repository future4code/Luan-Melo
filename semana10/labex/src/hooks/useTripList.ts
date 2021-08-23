import { useState, useEffect } from 'react'
import { ITrips } from '../services/Interfaces'
import { doGetTrip } from '../services/RequestApi'

export function useTripList() {
  const [data, setData] = useState<ITrips[]>([])

  useEffect(() => {
    async function fetchList() {
      const response = await doGetTrip()
      response?.trips && setData(response.trips)
    }
    fetchList()
  }, [])

  return data
}
