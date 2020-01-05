import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'

import MenuIcon from '@material-ui/icons/Menu'
import DoneIcon from '@material-ui/icons/Done'
import NoteIcon from '@material-ui/icons/Note'
import TurnetInIcon from '@material-ui/icons/TurnedIn'


type FilePickerProps = {
  files: Array<{
    filename: string,
    touched: boolean
  }>
  currentFile: string
  handleSelect: (f: string) => void
}
  
export const FilePicker: React.FC<FilePickerProps> = ({handleSelect, files, currentFile}) => {
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
            files.map((f: any) => 
              <CustomListItem 
                handleSelect={(f: string) => {
                  setIsOpen(false)
                  handleSelect(f)
                }}
                filename={f.filename}
                touched={f.touched}
                currentFile={currentFile}
              />
            )
          }
        </List>
      </Dialog>
    </>
  )
}

type CustomListItemProps = {
  filename: string,
  handleSelect: (f: string) => void,
  touched: boolean,
  currentFile: string
}

const CustomListItem: React.FC<CustomListItemProps> = ({handleSelect, filename, touched, currentFile}) => {
  return (
    <ListItem 
      autoFocus 
      button
      onClick={() => handleSelect(filename)}  
    >
      <ListItemAvatar>
        <Avatar>
          <NoteIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={filename}/>
      {
        currentFile === filename 
        ? <TurnetInIcon />
        : touched 
          ? <DoneIcon style={{color: 'green', marginLeft: '16px'}}/> 
          : <></>
      }
    </ListItem>
  )
}