import React from 'react';
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
  handleDelete: any
  handleSave: () => void
}

export const AnnotationList: React.FC<AnnotationListProps> = ({ handleChange, handleDelete, handleSave, annotations}) => {
  return (
    <>
      <ActionBar 
        onSave={handleSave}
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
  onSave: () => void
}

const ActionBar: React.FC<ActionBarProps> = ({ onSave }) => {
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
      </Grid>
    </AppBar>
  );
}
