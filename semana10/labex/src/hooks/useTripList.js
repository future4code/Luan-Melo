import { useState, useEffect } from 'react';
import { doGetTrip } from '../services/request-api';

export function useTripList() {
  const [data, setData] = useState(null);

  useEffect(() => {
     async function fetchList() {
      const response = await doGetTrip()
      setData(response.data.trips)
    }
    fetchList();
  }, []);

  return data
}