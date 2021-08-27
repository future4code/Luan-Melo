import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

const Login = () => {
  const [adminEmail, setAdminEmail] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const loginBody = { email: adminEmail, password: adminPassword }
  const { token, user } = useLogin(loginBody)

  const changeEmail = (e: string) => {
    setAdminEmail(e)
  }

  const changePassword = (e: string) => {
    setAdminPassword(e)
  }

  if (token) {
    localStorage.setItem('token', token)
    localStorage.setItem('id', user?.id || '')
  }

  return (
    <>
      {token ? <div>dasd</div> : <>Você precisa se conectar</>}
    </>
  )
}

export default Login
