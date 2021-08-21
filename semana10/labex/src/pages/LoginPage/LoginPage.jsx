import { useLogin } from '../../hooks/useLogin'

const LoginPage = () => {
  
  const useData = useLogin('astrodev@gmail.com.br', '123456')

  if (useData) {
    const { token } = useData
    console.log('useData', useData)
    console.log('token', token)
    localStorage.setItem('token', token)
  }

  console.log('useData', useData)

  return <div></div>
}

export default LoginPage
