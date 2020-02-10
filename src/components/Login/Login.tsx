import React, { useState } from 'react'

import { LoginForm } from './LoginForm'
import { App } from '../App'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'

import { auth } from '../../services/client'

import ls from 'local-storage'

export const Login: React.FC<any> = () => {
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

  if (loggedIn)
    return (<App />)
  else
    return (
      <Box style={{ backgroundColor: 'pink' }}>
        <Grid container item alignItems="center" justify="center" style={{ height: "100vh" }}>
          <Grid item children={
            <Card>
              {
                err  
                ? 
                <Alert severity="error">
                  <AlertTitle>Erro {err.status}</AlertTitle>
                  Usuario ou senha incorretos!
                </Alert>
                : <></>
              }
              <CardContent>
                <LoginForm loading={isLoading}onLogin={handleLogin} />
                </CardContent>
            </Card>
          } />
        </Grid>
      </Box>
    )
}