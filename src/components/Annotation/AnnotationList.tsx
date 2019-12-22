import React, { useState } from 'react';
import Add from '@material-ui/icons/Add'
import Save from '@material-ui/icons/Save'

import {
  Button,
  Paper,
  Grid,
  AppBar
} from '@material-ui/core'

import Annotation from './Annotation'

const AnnotationList: React.FC = () => {
  const [annotations, setAnnotations] = useState([1, 2, 3])
  return (
    <>
      <ActionBar />
      <Paper style={{ padding: '1rem' }}>
        {annotations.map(annotation => <Annotation />)}
      </Paper>
    </>
  );
}

const ActionBar: React.FC = () => {
  return (
    <AppBar position="static" color='default' style={{ padding: '1rem' }}>
      <Grid container wrap="nowrap" justify="space-between">
        <Grid item children={<Button size="small" variant='outlined' color="primary"><Save /></Button>} />
        <Grid item children={<Button size="small" variant='outlined' color="secondary"><Add /></Button>} />
      </Grid>
    </AppBar>
  );
}

export default AnnotationList;