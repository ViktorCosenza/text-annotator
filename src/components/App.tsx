import React, { useState, useReducer, SetStateAction } from 'react';
import { loremIpsum } from 'lorem-ipsum'

import MenuIcon from '@material-ui/icons/Menu'
import ArrowBack from '@material-ui/icons/ArrowBack'

import {
  AppBar,
  Button,
  Typography,
  Container,
  Grid,
  Menu,
  MenuItem
} from '@material-ui/core'

import AnnotationText from './AnnotationText'
import AnnotationList from './Annotation/AnnotationList'
import annotationReducer from '../utils/annotationReducer'

const App: React.FC = () => {
  const [text, ] = useState(loremIpsum({count: 30}))
  const [annotations, dispatch] = useReducer(annotationReducer, [])
  const [selection, setSelection] = useState<SetStateAction<Selection | null>>(null);
  const handleAdd = () => {
    console.log(selection)  
    dispatch({type: 'add', text: String(selection)})
  }
  return (
    <>
      <TopBar />
      <Container disableGutters maxWidth="xl" style={{ padding: '1rem', flex: '1' }}>
        <Grid container direction="column" justify="space-evenly" spacing={2}>
          <Grid item children=
            {
              <AnnotationText 
                text={text}
                selection={selection as Selection | null} 
                setSelection={setSelection} 
                onAdd={handleAdd}
              />
            } style={{ flexGrow: 1 }} />
          <Grid item children=
            {
              <AnnotationList annotations={annotations} dispatch={dispatch}/>
            } style={{ flexGrow: 1 }} />
        </Grid>
      </Container>
    </>
  );
}

const TopBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Grid container wrap="nowrap" justify="space-between" style={{ padding: "0.5rem" }}>
        <Grid item children={<Typography align="center" variant="h4" children="FAMA" />} />
        <Grid item container justify="flex-end">
          <Grid item children={<Button variant='contained'>Ajuda</Button>} />
          <Grid item children={<MainMenu />} />
        </Grid>
      </Grid>
    </AppBar>
  );
}



const MainMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget as Element)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Button onClick={handleClick}><MenuIcon /></Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem children={<Button children={<ArrowBack/>}/>} />
        <MenuItem children={<Button children="LOGOUT"/>} />
      </Menu>
    </>
  );
}

export default App;
