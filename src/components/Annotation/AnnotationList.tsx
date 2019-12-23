import React, { useReducer } from 'react';
import * as R from 'rambda'
import Add from '@material-ui/icons/Add'
import Save from '@material-ui/icons/Save'

import {
  Button,
  Paper,
  Grid,
  AppBar
} from '@material-ui/core'

import Annotation from './Annotation'


type AnnotationListProps = {
  dispatch: any
  annotations: any
}

const AnnotationList: React.FC<AnnotationListProps> = props => {
  return (
    <>
      <ActionBar dispatch={props.dispatch} />
      <Paper style={{ padding: '1rem' }}>
        {
          props.annotations.map((a: any) =>
            <Annotation key={a.id} id={a.id} dispatch={props.dispatch} defaultValue={a.text}/>)
        }
      </Paper>
    </>
  );
}

type ActionBarProps = {
  dispatch: (a: any) => void
}

const ActionBar: React.FC<ActionBarProps> = props => {
  return (
    <AppBar position="static" color='default' style={{ padding: '1rem' }}>
      <Grid container wrap="nowrap" justify="space-between">
        <Grid item children=
          {
            <Button
              onClick={() => props.dispatch({ type: 'save' })}
              size="small"
              variant='outlined'
              color="primary">
              <Save />
            </Button>
          }
        />
        <Grid item children=
          {
            <Button
              onClick={() => props.dispatch({ type: 'add' })}
              size="small"
              variant='outlined'
              color="secondary">
              <Add />
            </Button>
          }
        />
      </Grid>
    </AppBar>
  );
}

export default AnnotationList;