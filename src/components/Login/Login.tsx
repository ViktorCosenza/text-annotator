import React, {useState} from 'react'

import {LoginForm} from './LoginForm'
import {App} from '../App'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'


export const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
    console.log("Logged in")
  } 

  if (loggedIn) 
    return (<App />)
  else 
    return (
      <Grid container item alignItems="center" justify="center" style={{height: "100vh"}}>
        <Grid item children={
          <Card>
            <CardContent>
              <CardHeader title="Login" />
              <LoginForm onLogin={handleLogin}/>
            </CardContent>
          </Card>
        }/>
      </Grid>
    )
}