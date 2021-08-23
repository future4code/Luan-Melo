import { useState, useEffect } from 'react'
import { ILoginBody } from '../services/Interfaces'
import { doLogin } from '../services/RequestApi'

export function useLogin(body: ILoginBody) {
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    async function fetchList() {
      const response = await doLogin(body)
      response?.success && setToken(response.token)
    }
    fetchList()
  }, [body])

  return token
}
