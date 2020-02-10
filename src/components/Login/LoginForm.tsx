import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { LinearProgress } from '@material-ui/core'


type LoginFormProps = {
  onLogin: ({username, password}) => void
  loading: boolean
} 

export const LoginForm:React.FC<LoginFormProps> = ({onLogin, loading}) => {
  const [form, setForm] = useState({username: "", password:""})

  const handleChange = e => {
      e.persist()
      setForm(oldForm => ({
        ...oldForm,
        [e.target.name]: e.target.value
      }))
    }

  const handleSubmit = () => onLogin(form)

  return (
    <form>
      <Grid container direction="column" spacing={4}> 
        {
          loading
          ? <LinearProgress />
          : <></>
        }
        <Grid item children={<TextField required disabled={loading} onChange={handleChange} value={form.username} name="username" label="Login"/>}/>
        <Grid item children={<TextField required disabled={loading}onChange={handleChange} value={form.password} name="password" label="Senha"/>}/>
        <Grid item children={<Button disabled={loading} onClick={handleSubmit} variant="contained" style={{width: "100%"}}>LOGIN</Button>}/>
      </Grid>
    </form>
  )
}
