import React, { useState, useRef, SetStateAction } from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import Logout from '@material-ui/icons/ExitToApp'
import ArrowBack from '@material-ui/icons/ArrowBack'

import {
  AppBar,
  Button,
  Typography,
  Container,
  Grid,
  Box,
  Menu,
  MenuItem
} from '@material-ui/core'

import AnnotationText from './AnnotationText'
import AnnotationList from './Annotation/AnnotationList'


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectionRef, setSelectionRef] = useState<SetStateAction<Element | null>>(null)
  const handleSelection = () => {
    console.log(selectionRef)
    setIsMenuOpen(true)
  }

  return (
    <>
      {selectionRef ? <SelectionMenu open={isMenuOpen} handleClose={() => setIsMenuOpen(false)} anchorEl={selectionRef as Element}/> : null}
      <TopBar />
      <Container disableGutters maxWidth="xl" style={{ padding: '1rem', flex: '1' }}>
        <Grid container direction="column" justify="space-evenly" spacing={2}>
          <Grid item children={<AnnotationText setRef={setSelectionRef} onSelection={handleSelection}/>} style={{ flexGrow: 1 }} />
          <Grid item children={<AnnotationList />} style={{ flexGrow: 1 }} />
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

type SelectionMenuProps = {
  anchorEl: Element
  handleClose: () => void
  open: boolean
}

const SelectionMenu: React.FC<SelectionMenuProps> = props => {
  const [anchorEl, setAnchorEl] = useState<Element | null | undefined>(props.anchorEl)
  
  return (
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={props.open}
        onClose={props.handleClose}
      >
        <MenuItem children={<Button children={<ArrowBack/>}/>} />
        <MenuItem children={<Button children="Add!!!!!"/>} />
      </Menu>
  );
}

export default App;
