import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


type LoginFormProps = {
  onLogin: ({username, password}) => void
} 

export const LoginForm:React.FC<LoginFormProps> = ({onLogin}) => {
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
        <Grid item children={<TextField required onChange={handleChange} value={form.username} name="username" label="Login"/>}/>
        <Grid item children={<TextField required onChange={handleChange} value={form.password} name="password" label="Senha"/>}/>
        <Grid item children={<Button onClick={handleSubmit} variant="contained" style={{width: "100%"}}>LOGIN</Button>}/>
      </Grid>
    </form>
  )
}
