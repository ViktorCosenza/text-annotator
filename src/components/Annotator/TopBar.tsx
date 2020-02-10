import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


export const TopBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Grid container wrap="nowrap" justify="space-between" style={{ padding: "0.5rem" }}>
        <Grid item children={<Typography align="center" variant="h4" children="FAMA" />} />
        <Grid item container justify="flex-end" spacing={1}>
          <Grid item children={<Button variant='contained'>Ajuda</Button>} />
          <Grid item children={<Button variant="contained" children="LOGOUT" />} />
        </Grid>
      </Grid>
    </AppBar>
  );
}