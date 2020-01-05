import React from 'react';
import {
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'

type AnnotationTextProps = {
  text: string
  handleSelection: (s: React.MouseEvent<HTMLElement, MouseEvent>) => void
  hasSelection: boolean
  handleAdd: () => void
}

export const AnnotationText: React.FC<AnnotationTextProps> = ({text, handleSelection, hasSelection, handleAdd}) => {
  return (
    <Text 
      onSelection={handleSelection}
      onAdd={handleAdd}
      text={text}
      hasSelection={hasSelection}
    />
  )
}

type TextProps = {
  onSelection: (s: React.MouseEvent<HTMLElement, MouseEvent>) => void,
  onAdd: () => void,
  text: string,
  hasSelection: boolean
}

export const Text: React.FC<TextProps> = ({onSelection, hasSelection, text, onAdd}) => {
  return (
    <Paper style={{ padding: '1rem' }}>
      <Grid container direction="column">
        <Grid item  children=
          {
            <Typography onDoubleClick={onSelection} onMouseUp={onSelection}>
              {text}
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
                      onClick={onAdd} 
                      disabled={hasSelection} 
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

