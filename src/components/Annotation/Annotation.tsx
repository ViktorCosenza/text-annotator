import React from 'react';
import Delete from '@material-ui/icons/Delete'
import ThumbDown from '@material-ui/icons/ThumbDown'
import ThumbUp from '@material-ui/icons/ThumbUp'
import Remove from '@material-ui/icons/Remove'

import ontology from '../../utils/ontology'

import {AnnotationType, Polarity} from '../../types/AnnotationType'

import {
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  FormControl, 
  Select,
  TextField,
  Tooltip,
  Button
} from '@material-ui/core'

type AnnotationProps = {
  onDelete: () => void
  handleChange: (a: any) => any
  annotation: AnnotationType
}


const Annotation: React.FC<AnnotationProps> = ({onDelete, handleChange, annotation}) => {
  const firstValues = Object.keys(ontology)
  const secondValues = annotation.first
    ? Object.keys(ontology[annotation.first])
    : []
  const thirdValues = annotation.second
    ? Object.keys(ontology[annotation.first][annotation.second])
    : []  
  
  const fourthValues = annotation.third
    ? Object.keys(ontology[annotation.first][annotation.second][annotation.third])
    : []

  return (
    <Grid container wrap="nowrap" justify="space-between" spacing={2}>
      <Grid item container wrap="nowrap" justify="space-around" spacing={2} style={{ flex: '2' }}>
        <Grid item children={
          <CustomSelect 
            onChange={handleChange('first')}
            selected={annotation.first} 
            values={firstValues}
            inputLabel="Nível 1" />
          } style={{ flex: "1" }} />
        <Grid item children={
          <CustomSelect 
            onChange={handleChange('second')}
            selected={annotation.second}
            values={secondValues}
            inputLabel="Nível 2" />
          } style={{ flex: "1" }} />
        <Grid item children={
          <CustomSelect 
            onChange={handleChange('third')}
            selected={annotation.third}
            values={thirdValues}
            inputLabel="Nível 3" />
          } style={{ flex: "1" }} />
        <Grid item children={
          <CustomSelect 
            onChange={handleChange('fourth')}
            selected={annotation.fourth}
            values={fourthValues}
            inputLabel="Nível 4" />
          } style={{ flex: "1" }} />
      </Grid>
      <Grid item container justify="space-between" wrap="nowrap"  style={{flex: '1'}}>
        <Grid 
          item 
          children={<CustomTextInput value={annotation.reference.text}/>} style={{ flex: '3' }}
        />
        <Grid item children={<PolaritySelect selected={annotation.polarity} onChange={handleChange("polarity")}/>}/>
        <Grid item container justify="center" style={{flex: '1'}}>
          <Grid item> 
            <Tooltip title="Explícito">
              <Checkbox 
                onChange={handleChange("explicit")}
                checked={annotation.explicit} 
                color='primary' 
                style={{flex: '1', marginLeft: '0px'}}
              />
            </Tooltip>
          </Grid>
          <Grid item>
              <Tooltip title="Deletar">
                <Button 
                  onClick={onDelete}
                  children={<Delete />} 
                />
              </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

type CustomSelectProps = {
  inputLabel: string
  values: string[]
  selected: string
  onChange: (e: React.ChangeEvent<{value: string}>) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({inputLabel, values, selected, onChange}) => {
  return (
    <FormControl style={{ minWidth: '100%' }}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        value={selected}
        onChange={onChange}
      >
        {
          values.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}

type CustomTextInputProps = {
  value: string
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({value}) => {
  return (
    <FormControl style={{ minWidth: '100%' }}>
      <TextField disabled label="Selecione no texto" value={value}/>
    </FormControl>
  )
}


const PolaritySelect: React.FC<any> = ({onChange, selected}) => {
  let icon
  switch(selected){
    case Polarity.Positive:
      icon = <ThumbUp style={{color: "green"}}/>
      break
    case Polarity.Neutral:
      icon = <Remove  style={{color: "orange"}}/>
      break
    case Polarity.Negative:
      icon = <ThumbDown style={{color: "red"}}/>
      break
  }
  
  return ( 
    <Grid direction="column" justify="center" alignItems="center" alignContent="center" container>
      <Grid item children={<Button onClick={onChange} children={icon}/>}/>
    </Grid>  
  )
}

export default Annotation;