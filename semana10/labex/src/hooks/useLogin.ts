import { useState, useEffect } from 'react'
import { ILoginBody, IUser } from '../services/Interfaces'
import { doLogin } from '../services/RequestApi'

export function useLogin(body: ILoginBody) {
  const [token, setToken] = useState<string>('')
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    async function fetchList() {
      const response = await doLogin(body)
      response?.success && setToken(response.token) && setUser(response.user)
    }
    fetchList()
  }, [body])

  return { token, user }
}
