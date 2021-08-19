import { useState, useEffect } from 'react';
import { doLogin } from '../services/request-api';

export function useLogin(email, password) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchList() {
      const response = await doLogin(email, password)
      response?.data && setData(response.data)
    }
    fetchList();
  }, [email, password]);

  return data
}