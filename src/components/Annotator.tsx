import React, { useState, useEffect } from 'react';
import * as R from 'rambda'

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
}

export const Annotator: React.FC<AnnotatorProps> = ({annotation, text,  handleAdd, handleDelete}) => {
  const [selection, setSelection] = useState<Selection | null>(null);

  const handleSelection = R.pipe(
    window.getSelection,
    s => s ? (s.anchorOffset - s.focusOffset === 0 ? null : s) : null,
    R.ifElse(
      R.equals(0),
      R.always(null),
      setSelection
    )
  )

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
              <AnnotationList annotations={annotation} handleDelete={handleDelete} handleAdd={handleAdd} />
            } style={{ flexGrow: 1 }} />
        </Grid>
      </Container>
    </>
  );
}
