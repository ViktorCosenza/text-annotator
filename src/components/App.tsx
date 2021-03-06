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
import { Polarity } from '../types/AnnotationType'

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
    setAnnotation(selectedFile.annotation)
  }, [selectedFile])

  useEffect(() => {
    if (selectedFile === null) return
    setSelectedFile(oldFile => 
      ({
        ...oldFile, 
        annotation: annotation
      }))
  }, [annotation])

  
  const handleAnnotationChange = (id:number) => (field: string) => (e: React.ChangeEvent<{value: string}>) => {
    let newValues
    switch(field) {
      case "first":
        newValues = {
          first: e.target.value,
          second: "",
          third: ""
        }
        break
      case "second": 
        newValues = {
          second: e.target.value,
          third: ""
        }
        break 
      case "third":
        newValues = {third: e.target.value}
        break
      case "fourth":
        newValues = {fourth: e.target.value}
        break
      case "polarity":
      case "explicit": 
        break
      default: throw Error("Invalid field parameter")
    }

    function nextPolarity(p: Polarity) {
      if (p === Polarity.Positive) return Polarity.Negative
      if (p === Polarity.Neutral) return Polarity.Positive
      if (p === Polarity.Negative) return Polarity.Neutral
    }
    setAnnotation(oldAnnotation => 
      oldAnnotation.map(a => a.id === id ? {
        ...a,
        ...newValues,
        ...(field === "explicit" ? {explicit: !a.explicit} : {}),
        ...(field === "polarity" ? {polarity: nextPolarity(a.polarity)} : {})
      } : a))
  }

  const handleSave = () => {
    submitAnnotation({
      text: selectedFile.text,
      annotation: selectedFile.annotation
    })
  }

  const handleAdd = (selection: Selection) => () => {
    setAnnotation([
      ...annotation, 
      {
        id: annotation.length + 1,
        first: "",
        second: "",
        third: "",
        fourth: "",
        explicit: false,
        polarity: Polarity.Neutral,
        reference: {
          text: selection.toString(),
          pos: [selection.focusOffset, selection.anchorOffset].sort()
        }, 
      }
    ])
  }

  const handleDelete = (id: number) => () => {
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
              handleChange={handleAnnotationChange}
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

