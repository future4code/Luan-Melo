import { useLogin } from '../../hooks/useLogin'

const Login = () => {

  const loginBody = {email: 'astrodev@gmail.com.br', password: '123456'}
  const token = useLogin(loginBody)

  if (token) {
    console.log('token', token)
    localStorage.setItem('token', token)
  }


  return <div></div>
}

export default Login
