import React, { useRef, Dispatch, SetStateAction, RefObject } from 'react';
import * as R from 'rambda'
import {
  Button,
  Grid,
  Paper,
  Typography,
  AppBar
} from '@material-ui/core'

type AnnotationTextProps = {
  text: String
  selection: Selection | null
  setSelection: (s: (Selection | null)) => void
  onAdd: any
}

const AnnotationText: React.FC<AnnotationTextProps> = props => {
  const handleMouseSelection = R.pipe(
    window.getSelection,
    s => s ? (s.anchorOffset - s.focusOffset == 0 ? null : s) : null,
    R.ifElse(
      R.equals(0),
      R.always(null),
      props.setSelection
    )
  )

  return (
    <Paper style={{ padding: '1rem' }}>
      <Grid container direction="column">
        <Grid item  children=
          {
            <Typography onDoubleClick={handleMouseSelection} onMouseUp={handleMouseSelection}>
              {props.text}
            </Typography>
          }
        />
        <Grid item children=
          {
              <Grid container justify="flex-end" >
                <Grid item children=
                  {
                    <Button 
                      variant="outlined" 
                      onClick={props.onAdd} 
                      disabled={!props.selection} 
                      children="Adicionar Seleção" />
                  } 
                />
                  
              </Grid>
          }
        />
      </Grid>
    </Paper>
  );
}

export default AnnotationText;
