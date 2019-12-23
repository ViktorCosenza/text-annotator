import React, { useRef, Dispatch, SetStateAction, RefObject } from 'react';
import {
  Paper,
  Typography
} from '@material-ui/core'

import { loremIpsum } from 'lorem-ipsum'

type AnnotationTextProps = {
  onSelection: (s: String) => void
  setRef: Dispatch<SetStateAction<Element | null>>
}

const AnnotationText: React.FC<AnnotationTextProps> = props => {
  const ref = useRef(null)

  const handleMouseSelection: () => void = () => {
    props.setRef(ref.current)
    props.onSelection(String(window.getSelection()))
  }

  return (
    <Paper style={{ padding: '1rem' }} ref={ref}>
      <Typography onDoubleClick={handleMouseSelection} onMouseUp={handleMouseSelection}>
        {loremIpsum({ count: 25 })}
      </Typography>
    </Paper>
  );
}

export default AnnotationText;
