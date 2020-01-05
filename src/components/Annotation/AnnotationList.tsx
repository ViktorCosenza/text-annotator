import React from 'react';
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
  annotations: any
  handleAdd: any
  handleDelete: any
}

export const AnnotationList: React.FC<AnnotationListProps> = ({handleAdd, handleDelete, annotations}) => {
  return (
    <>
      <ActionBar onAdd={handleAdd}/>
      <Paper style={{ padding: '1rem' }}>
        {
          annotations.map((a: any) => 
            <Annotation key={a.id} id={a.id} onDelete={handleDelete} defaultValue={a.text}/>
          )
        }
      </Paper>
    </>
  );
}

type ActionBarProps = {
  onAdd: (a: any) => void
}

const ActionBar: React.FC<ActionBarProps> = ({onAdd}) => {
  return (
    <AppBar position="static" color='default' style={{ padding: '1rem' }}>
      <Grid container wrap="nowrap" justify="space-between">
        <Grid item children=
          {
            <Button
              onClick={() => alert("Not implemented :'(")}
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
              onClick={onAdd}
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
