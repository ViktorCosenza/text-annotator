import React, { useState, useEffect } from 'react'

import { TopBar } from './TopBar'
import {AnnotationList} from './Annotation/AnnotationList'
import {AnnotationText} from './Annotation/AnnotationText'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'


import { submitAnnotation, getOntology, getAssigment } from '../../services/client'
import { Polarity, AnnotationType } from '../../types/AnnotationType'

export const Annotator: React.FC<any> = () => {
  const [annotation, setAnnotation] = useState<Array<AnnotationType>>([])
  const [ontology, setOntology] = useState(null)
  const [assigment, setAssigment] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(false)
  const [selection, setSelection] = useState<Selection | null>(null);

  const handleSelection = () => {
    const s = window.getSelection()
    const newSelection = s ? (s.anchorOffset - s.focusOffset === 0 ? null : s) : null
    setSelection(newSelection)
  }

  useEffect(() => {
    Promise.all([getOntology(), getAssigment()])
      .then(([{ data: { data } }, { data: { assigment } }]) => {
        setOntology(JSON.parse(data))
        setAssigment(assigment)
      })
      .catch(setErr) 
      .finally(() => setIsLoading(false))
  }, [])

  const handleAnnotationChange = (id: number) => (field: string) => (e: React.ChangeEvent<{ value: string }>) => {
    let newValues
    switch (field) {
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
        newValues = { third: e.target.value }
        break
      case "fourth":
        newValues = { fourth: e.target.value }
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
        ...(field === "explicit" ? { explicit: !a.explicit } : {}),
        ...(field === "polarity" ? { polarity: nextPolarity(a.polarity) } : {})
      } : a))
  }

  const handleSave = () => {
    const data = {
      assigment_id: assigment.assigment_id,
      labels: annotation.map(a => ({ 
        first: a.first,
        second: a.second,
        third: a.third,
        fourth: a.fourth,
        explicit: a.explicit,
        polarity: a.polarity,
        start: a.reference.pos[0],
        end: a.reference.pos[1]
      }))
    }
    setAssigment(null)
    setIsLoading(true)
    submitAnnotation(data)
      .then(() => {
        getAssigment()
          .then(({data: {assigment}}) => {
            setAssigment(assigment)
            setAnnotation([])
            setIsLoading(false)
          })
      })
      .catch(console.error)
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

  if (err){
    return (
      <>
        Erro: {err}
      </>
    )
  }

  return (
    <>
      <TopBar/>
      {
        isLoading || !assigment
          ? <> </>
          : <Container disableGutters maxWidth="xl" style={{ padding: '1rem', flex: '1' }}>
          <Grid container direction="column" justify="space-evenly" spacing={2}>
            <Grid item children=
            {
              <AnnotationText
                text={assigment.text}
                hasSelection={!selection}
                handleSelection={handleSelection}
                handleAdd={handleAdd(selection)}
              />
            } style={{ flexGrow: 1 }} />
          <Grid item children=
            {
              <AnnotationList 
                annotations={annotation} 
                handleChange={handleAnnotationChange}
                handleSave={handleSave} 
                handleDelete={handleDelete} 
              />
            } style={{ flexGrow: 1 }} />
        </Grid>
      </Container>
      }
    </>
  )
}


