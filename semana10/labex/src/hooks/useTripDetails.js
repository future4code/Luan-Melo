import { useState, useEffect } from 'react';
import { doGetTripDetail } from '../services/request-api';

export function useTripDetails(aluno, id, token) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchList() {
      const response = await doGetTripDetail(aluno, id, token)
      response?.data?.trips && setData(response.data.trips)
    }
    fetchList();
  }, [aluno, id, token]);

  return data
}