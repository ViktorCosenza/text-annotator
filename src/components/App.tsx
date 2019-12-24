import React, { useState, useReducer, SetStateAction, SyntheticEvent } from 'react';
import { loremIpsum } from 'lorem-ipsum'

import Note from '@material-ui/icons/Note'
import CloudUpload from '@material-ui/icons/CloudUpload'
import MenuIcon from '@material-ui/icons/Menu'
import Done from '@material-ui/icons/Done'
import {
  AppBar,
  Button,
  Typography,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from '@material-ui/core'

import AnnotationText from './AnnotationText'
import AnnotationList from './Annotation/AnnotationList'
import annotationReducer from '../utils/annotationReducer'

const App: React.FC = () => {
  const [files, setFiles] = useState<SetStateAction<any>>([])


  const [text, setText] = useState(loremIpsum({ count: 30 }))
  const [annotations, dispatch] = useReducer(annotationReducer, [])
  const [selection, setSelection] = useState<SetStateAction<Selection | null>>(null);

  const handleAdd = () => {
    console.log(selection)
    dispatch({ type: 'add', text: String(selection) })
  }

  const handleUpload = ({ target: { files } }: any) => {
    const readFile = async (f: File) => {
      const r = new FileReader()
      r.onload = () => {
        setText(r.result as string)
      }
      r.readAsText(f)
    }
    console.log(files)
    setFiles(Array.from(files).map((f: any) => ({
      file: f, touched: false, annotation: {}
    })))
  }

  return (
    <>
      <TopBar handleUpload={handleUpload} files={files.map((f: any) => ({filename: f.file.name, touched: f.touched}))} />
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
              <AnnotationList annotations={annotations} dispatch={dispatch} />
            } style={{ flexGrow: 1 }} />
        </Grid>
      </Container>
    </>
  );
}


type TopbarProps = {
  handleUpload: (a: any) => void,
  files: Array<{
    filename: string,
    touched: boolean
  }>
}

const TopBar: React.FC<TopbarProps> = props => {
  return (
    <AppBar position="static">
      <Grid container wrap="nowrap" justify="space-between" style={{ padding: "0.5rem" }}>
        <Grid item children={<Typography align="center" variant="h4" children="FAMA" />} />
        <Grid item container justify="flex-end" spacing={1}>
          <Grid item children={<FilePicker files={props.files}/>} />
          <Grid item children={<FileUploader handleUpload={props.handleUpload}/>}/>
          <Grid item children={<Button variant='contained'>Ajuda</Button>} />
          <Grid item children={<Button variant="contained" children="LOGOUT"/>} />
        </Grid>
      </Grid>
    </AppBar>
  );
}

type FileUploaderProps = {
  handleUpload: any
}

const FileUploader: React.FC<FileUploaderProps> = props => {
  return (
    <>
      <input
        accept="text/*"
        id="upload-files"
        multiple
        type="file"
        style={{ display: 'none' }}
        onInput={props.handleUpload}
      />
      <label htmlFor="upload-files" >
        <Button variant="contained" component="span">
          <CloudUpload />
        </Button>
      </label>
    </>
  )
}

type FilePickerProps = {
  files: Array<{
    filename: string,
    touched: boolean
  }>
}

const FilePicker: React.FC<FilePickerProps> = props => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <Button onClick={handleClick} variant="contained"><MenuIcon /></Button>
      <Dialog onClose={handleClose} open={isOpen}>
        <DialogTitle>Textos:</DialogTitle>
        <List>
          {
            props.files.map((f: any) => 
              <ListItem autoFocus button>
                <ListItemAvatar>
                  <Avatar>
                    <Note />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={f.filename}/>
                {f.touched ? <Done style={{color: 'green', marginLeft: '16px'}}/> : <></>}
              </ListItem>
            )
          }
        </List>
      </Dialog>
    </>
  )
}

export default App;
