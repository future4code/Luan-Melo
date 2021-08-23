import { useState, useEffect } from 'react'
import { IGetTripDetailBody, ITripDetail } from '../services/Interfaces'
import { doGetTripDetail } from '../services/RequestApi'

export function useTripDetails(body: IGetTripDetailBody) {
  const [data, setData] = useState<ITripDetail>()

  useEffect(() => {
    async function fetchList() {
      const response = await doGetTripDetail(body)
      setData(response.trip)
    }
    fetchList()
  }, [body])

  return data
}
