import { useState, useEffect } from 'react'
import { doGetTrip } from '../services/request-api'

export function useTripList() {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchList() {
      const response = await doGetTrip()
      console.log(response.data.trips)
      response?.data?.trips && setData(response.data.trips)
    }
    fetchList()
  }, [])

  return data
}
