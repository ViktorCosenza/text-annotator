import React, { useState } from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core'

import {AnnotationText} from './AnnotationText'
import {AnnotationList} from './Annotation/AnnotationList'

type AnnotatorProps = {
  annotation: any
  text: string
  handleAdd: any
  handleDelete: any
  handleSave: () => void
}

export const Annotator: React.FC<AnnotatorProps> = ({annotation, text,  handleAdd, handleSave, handleDelete}) => {
  const [selection, setSelection] = useState<Selection | null>(null);

  const handleSelection = () => {
    const s = window.getSelection()
    const newSelection = s ? (s.anchorOffset - s.focusOffset === 0 ? null : s) : null
    setSelection(newSelection)
  }

  return (
    <>
      <Container disableGutters maxWidth="xl" style={{ padding: '1rem', flex: '1' }}>
        <Grid container direction="column" justify="space-evenly" spacing={2}>
          <Grid item children=
            {
              <AnnotationText
                text={text}
                hasSelection={!selection}
                handleSelection={handleSelection}
                handleAdd={() => handleAdd(selection)}
              />
            } style={{ flexGrow: 1 }} />
          <Grid item children=
            {
              <AnnotationList 
                annotations={annotation} 
                handleSave={handleSave} 
                handleDelete={handleDelete} 
                handleAdd={handleAdd} 
              />
            } style={{ flexGrow: 1 }} />
        </Grid>
      </Container>
    </>
  );
}
