import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import {FilePicker} from './helpers/FilePicker'
import {FileUploader} from './helpers/FileUploader'

type TopbarProps = {
  handleUpload: (a: any) => void,
  handleFileSelect: (f: string) => void
  files: Array<{
    filename: string,
    touched: boolean
  }>
  currentFile: string
}

export const TopBar: React.FC<TopbarProps> = ({handleFileSelect, handleUpload, files, currentFile}) => {
  return (
    <AppBar position="static">
      <Grid container wrap="nowrap" justify="space-between" style={{ padding: "0.5rem" }}>
        <Grid item children={<Typography align="center" variant="h4" children="FAMA" />} />
        <Grid item container justify="flex-end" spacing={1}>
          <Grid item children={<FilePicker currentFile={currentFile} handleSelect={handleFileSelect} files={files} />} />
          <Grid item children={<FileUploader handleUpload={handleUpload} />} />
          <Grid item children={<Button variant='contained'>Ajuda</Button>} />
          <Grid item children={<Button variant="contained" children="LOGOUT" />} />
        </Grid>
      </Grid>
    </AppBar>
  );
}