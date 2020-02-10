import React from 'react'

import { LoginForm } from './LoginForm'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'

export const Login: React.FC<any> = ({onLogin, isLoading, hasErr}) => {
  const handleLogin = ({ username, password }) => onLogin({username: username, password: password})
    return (
      <Box style={{ backgroundColor: 'pink' }}>
        <Grid container item alignItems="center" justify="center" style={{ height: "100vh" }}>
          <Grid item children={
            <Card>
              {
                hasErr  
                ? 
                <Alert severity="error">
                  <AlertTitle>Erro</AlertTitle>
                  Usuario ou senha incorretos!
                </Alert>
                : <></>
              }
              <CardContent>
                <LoginForm loading={isLoading} onLogin={handleLogin} />
                </CardContent>
            </Card>
          } />
        </Grid>
      </Box>
    )
}