import React from 'react';
import {
  Paper,
  Typography
} from '@material-ui/core'

import {loremIpsum} from 'lorem-ipsum'

const AnnotationText: React.FC = () => {
  return (
      <Paper style={{padding: '1rem'}}>
          <Typography>
            {loremIpsum({count: 25})}
          </Typography>
      </Paper>

  );
}

export default AnnotationText;
