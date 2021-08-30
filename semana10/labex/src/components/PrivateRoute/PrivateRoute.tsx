import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PAGES_URL } from '../../services/Constants'

const PrivateRoute: React.FC = ({ children }) => {
  const [accessAllowed, setAccessAllowed] = useState(false)
  const { push } = useHistory()
  const hasUserAndToken =
    localStorage.getItem('token') && localStorage.getItem('user')

  const verifyUserCredential = useCallback(async () => {
    if (hasUserAndToken) {
      setAccessAllowed(true)
    } else {
      setAccessAllowed(false)
      push(PAGES_URL.LOGIN)
    }
  }, [hasUserAndToken, push])

  useEffect(() => {
    verifyUserCredential()
  }, [verifyUserCredential])

  return <>{accessAllowed ? children : <>Carregando...</>}</>
}

export default PrivateRoute
