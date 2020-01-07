import React, {useState} from 'react'

import {LoginForm} from './LoginForm'
import {App} from '../App'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import {auth} from '../../services/client'


export const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = ({username, password}) => {
    console.log('Requested...')
    auth({username, password})
      .then(console.log)
      .catch(console.error)
      .finally(() => setLoggedIn(true))
    
  } 

  if (loggedIn) 
    return (<App />)
  else 
    return (
      <Box style={{backgroundColor: 'pink'}}>
        <Grid container item alignItems="center" justify="center" style={{height: "100vh"}}>
          <Grid item children={
            <Card>
              <CardContent>
                <LoginForm onLogin={handleLogin}/>
              </CardContent>
            </Card>
          }/>
        </Grid>
      </Box>
    )
}