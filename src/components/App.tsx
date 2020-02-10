import React, {useState} from 'react'
import { auth } from '../services/client'
import { Annotator } from './Annotator/Annotator'
import {Login} from './Login/Login'
import ls from 'local-storage'

import { Router, navigate } from '@reach/router'

const App : React.FC<any> = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)

  const handleLogin = ({ username, password }) => {
    setIsLoading(true)
    auth({ username, password })
      .then(({data: {token}}) => {
        ls('@auth', token)
        setLoggedIn(true)
      })
      .catch(setErr)
      .finally(() => setIsLoading(false))
  }

  if (loggedIn) { navigate("/annotator") }
  else {navigate("/login")}

  return (
    <Router>
      <Annotator path="/annotator"/>
      <Login isLoading={isLoading} hasErr={Boolean(err)} onLogin={handleLogin} path="/login"/>
    </Router>
  )
}

export default App