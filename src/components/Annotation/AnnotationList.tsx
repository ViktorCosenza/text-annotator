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

import {AnnotationType} from '../../types/AnnotationType'

type AnnotationListProps = {
  annotations: AnnotationType[]
  handleChange: any
  handleAdd: () => void
  handleDelete: any
  handleSave: () => void
}

export const AnnotationList: React.FC<AnnotationListProps> = ({handleAdd, handleChange, handleDelete, handleSave, annotations}) => {
  return (
    <>
      <ActionBar 
        onSave={handleSave}
        onAdd={handleAdd}
      />
      <Paper style={{ padding: '1rem' }}>
        {
          annotations.map((a: any) => 
            <Annotation key={a.id} handleChange={handleChange(a.id)} onDelete={handleDelete(a.id)} annotation={a}/>
          )
        }
      </Paper>
    </>
  );
}

type ActionBarProps = {
  onAdd: (a: any) => void
  onSave: () => void
}

const ActionBar: React.FC<ActionBarProps> = ({onAdd, onSave}) => {
  return (
    <AppBar position="static" color='default' style={{ padding: '1rem' }}>
      <Grid container wrap="nowrap" justify="space-between">
        <Grid item children=
          {
            <Button
              onClick={onSave}
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
