import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Dialog from '@material-ui/core/Dialog'

import { Annotator } from './Annotator'
import { FileUploader } from './helpers/FileUploader'
import { TopBar } from './TopBar'

import { submitAnnotation } from '../services/client'

export const App: React.FC = () => {
  const [files, setFiles] = useState<any[]>([])
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [annotation, setAnnotation] = useState([])

  useEffect(() => {
    if (selectedFile === null) return
    if (selectedFile.text !== null) return

    const readFile = (f: File) => {
      const r = new FileReader()
      r.onload = () => {
        setFiles(files => files.map(f => f.id === selectedFile.id ? {...f, text: r.result}: f))
        setSelectedFile({...selectedFile, text: r.result})
      }
      r.readAsText(f)
    }
    readFile(selectedFile.file)
  }, [selectedFile])

  useEffect(() => {
    if (selectedFile === null) return
    setSelectedFile(oldFile => 
      ({
        ...oldFile, 
        annotation: annotation
      }))
  }, [annotation])

  const handleSave = () => {
    submitAnnotation({
      text: selectedFile.text,
      annotation: selectedFile.annotation
    })
  }

  const handleAdd = (selection: Selection | null) => {
    const text = selection ? selection.toString() : ""
    const newAnnotations = [
      ...annotation, 
      {
        id: annotation.length + 1,
        text: text, 
        first: null, 
        second: null, 
        third: null
      }
    ]
    setAnnotation(newAnnotations)
  }

  const handleDelete = (id: number) => {
    const newAnnotations = annotation.filter(a => a.id !== id)
    setAnnotation(newAnnotations)
  }

  const handleUpload = ({ target: { files } }: any) => {
    files = Array.from(files).map((f, idx) => ({
      id: idx,
      file: f, 
      touched: false, 
      text: null,
      annotation: []
    })).sort((a, b) => a.id < b.id ? -1 : 1)

    setFiles(files)
    setSelectedFile(files[0])
  }

  const handleFileSelect = (filename: string) => {
    setFiles(
      files
        .map(f => f.id === selectedFile.id ? {...f, ...selectedFile, touched: true} : f)
        .sort((a, b) => a.id < b.id ? -1 : 1)
    )
    const newFile = files.find(f => f.file.name === filename)
    setSelectedFile(newFile)
  }

  return (
    <>
      <TopBar
        handleUpload={handleUpload}
        handleFileSelect={handleFileSelect}
        files={files.map((f: any) => ({ filename: f.file.name, touched: f.touched }))}
        currentFile={selectedFile ? selectedFile.file.name : null}
      />
      {
        selectedFile === null
          ? <BigUpload 
              handleUpload={handleUpload}
            />
          : <Annotator 
              annotation={selectedFile.annotation}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              handleSave={handleSave}
              text={selectedFile.text}
            />
      }

    </>
  )
}

type BigUploadProps = {
  handleUpload: ({ target: { files } }: any) => void
}

const BigUpload: React.FC<BigUploadProps> = ({handleUpload}) => {
  return (
    <Dialog open={true} >
      <Grid >
        <Card>
          <CardHeader 
            title="Envie arquivos para anotar"
            style={{margin: "32px 16px"}}
          />
          <CardContent>
            <Grid container justify="center">
              <Grid item children={<FileUploader handleUpload={handleUpload} />}/>
            </Grid>
        </CardContent>
        </Card>
      </Grid>
    </Dialog>
  )
} 

