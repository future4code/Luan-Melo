import { useState, useEffect } from 'react'
import { IGetTripDetailBody, ITripDetail } from '../services/Interfaces'
import { doGetTripDetail } from '../services/RequestApi'

export function useTripDetails(body: IGetTripDetailBody) {
  const [data, setData] = useState<ITripDetail>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchList() {
      setLoading(true)
      const response = await doGetTripDetail(body)
      setData(response.trip)
      setLoading(false)
    }
    fetchList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading }
}
