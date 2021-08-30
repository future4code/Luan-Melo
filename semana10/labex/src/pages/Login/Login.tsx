import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PAGES_URL } from '../../services/Constants'
import { doLogin } from '../../services/RequestApi'

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const { push } = useHistory()

  const handleSetState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLogin = async () => {
    try {
      const { email, password } = state
      if (email.length > 0 && password.length > 0) {
        const response = await doLogin({ email, password })
        if (response.success) {
          localStorage.setItem('token', response.token)
          localStorage.setItem('user', JSON.stringify(response.user))
          push(PAGES_URL.ADMIN_TRIP_LIST)
        }
      } else {
        setError('Preencha o campo de Email / Senha.')
      }
    } catch (error) {}
  }

  return (
    <>
      <input
        type={'text'}
        placeholder={'Email'}
        onChange={(e) => handleSetState(e)}
        name="email"
      />
      <input
        type={'text'}
        placeholder={'Senha'}
        onChange={(e) => handleSetState(e)}
        name="password"
      />
      {error && <p>{error}</p>}
      <button onClick={() => push(PAGES_URL.HOME)}>Voltar</button>
      <button type="submit" onClick={() => handleLogin()}>
        Entrar
      </button>
    </>
  )
}

export default Login
