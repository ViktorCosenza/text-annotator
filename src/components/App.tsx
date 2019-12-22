import React, { Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu'


import {
  AppBar,
  Button,
  Typography,
  Container,
  Grid,
  Box
} from '@material-ui/core'

import AnnotationText from './AnnotationText'
import AnnotationList from './Annotation/AnnotationList'

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <Container disableGutters maxWidth="xl" style={{ padding: '1rem', flex: '1' }}>
        <Grid container direction="column" justify="space-evenly" spacing={2}>
          <Grid item children={<AnnotationText />} style={{ flexGrow: 1 }} />
          <Grid item children={<AnnotationList />} style={{ flexGrow: 1 }} />
        </Grid>
      </Container>
    </>
  );
}

const TopBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Grid container wrap="nowrap" justify="space-between" style={{ padding: "0.5rem" }}>
        <Grid item children={<Typography align="center" variant="h4" children="FAMA" />} />
        <Grid item container justify="flex-end">
          <Grid item children={<Button variant='contained'>Ajuda</Button>} />
          <Grid item children={<Button><MenuIcon /></Button>} />
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default App;
