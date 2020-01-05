import React, { useState, useReducer } from 'react';
import { loremIpsum } from 'lorem-ipsum'
import * as R from 'rambda'

import {
  Container,
  Grid,
} from '@material-ui/core'

import {AnnotationText} from './AnnotationText'
import {AnnotationList} from './Annotation/AnnotationList'
import annotationReducer from '../utils/annotationReducer'

type AnnotatorProps = {
  file: any,
  text: string
}

export const Annotator: React.FC<AnnotatorProps> = ({file, text}) => {
  const [annotations, dispatch] = useReducer(annotationReducer, [])
  const [selection, setSelection] = useState<Selection | null>(null);

  const handleAdd = () => {
    dispatch({ type: 'add', text: String(selection) })
  }

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
                handleAdd={handleAdd}
              />
            } style={{ flexGrow: 1 }} />
          <Grid item children=
            {
              <AnnotationList annotations={annotations} dispatch={dispatch} />
            } style={{ flexGrow: 1 }} />
        </Grid>
      </Container>
    </>
  );
}
